const express = require('express');
const app = express();
var socketServer = require('http').Server(app);
var io = require('socket.io')(socketServer);
const fetch = require('node-fetch');
// Game Data:
// ---> update to say how many are in game once gameStarted is true
let demoAdmin = false;
let nextGameTime = !demoAdmin ? new Date(Date.now()).setHours(20, 0, 0, 0) : new Date(Date.now());
const totalUsers = 10;
let game_started = false;
const totalMatchPercentage = {};
const { userAnsPerQues } = require('./services/gameAnswers/userAnsPerQues');
const { totalGameAnswers } = require('./services/gameAnswers/totalGameAnswers');
const { calculateQuestionMatches } = require('./services/matching/calculateQuestionMatches');
const { calculateNewMatchAverage } = require('./services/matching/calculateMatchAverage');
const { compileSumMatches } = require('./services/matching/compileSumMatches');
let gameRoomTimer = 15;  // declared outside of io
// Question Data
let questionIndex = 1;  //
let questionResponses = {};
let totalResponsesToCurrentQuestion = 0;
let totalPerfectMatches = {};
require('dotenv').config()
const ENV = process.env.ENV || "development";
const cors = require('cors');
const bodyParser = require('body-parser')
// Routes
const sessionsRoutes = require('./routes/sessions');
const questionsRoutes = require('./routes/questions');
const userProfileRoutes = require('./routes/users');
// -----> Knex
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');
const insertMatch = require('./utils/insertMatchHistory')(knex);
// -----> UserPoole and Profiles
const userPool = {};
const usersProfiles = {};
// -----> SocketServer
socketServer.listen(5001);
app.use(morgan('dev'));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({  extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));
app.use("/sessions", sessionsRoutes(knex));
app.use("/questions", questionsRoutes(knex));
app.use("/profile", userProfileRoutes(knex));

io.on('connection', function (socket) {
  console.log("connection made");
  // Game Status Check Loop
  // do {
  //   preGame();
  // } while (game_started);
  //send next game start time
  io.emit('setNextGameTime', nextGameTime );
  socket.on('triggerStart', (data) => {
    console.log(data);
    if (data === 'true') {
      console.log('*** Trigger Start Executed ***');
      preGame();
      game_started = true;
    }
  });
  // New connected user --> store in local object
  socket.on('newUser', (userInfo) => {
    const {user_id, profile_picture, instagram_id, full_name} = userInfo;
    userPool[userInfo.user_id] = {
      img: userInfo.profile_picture,
      match: 0
    }
    usersProfiles[userInfo.user_id] = {
      instagram_id: userInfo.instagram_id,
      full_name: userInfo.full_name,
      img: userInfo.profile_picture,
      username: userInfo.username
    }
  });
  //check if the time is render game
  if (Date.now() > nextGameTime) {
    game_started = true;
  }
  // chatroom messages:
  socket.on('message', (messageData) => {
    console.log(messageData);
    io.emit('message', messageData);
  });
  function preGame() {
    // Send Message Redirect from WaitingRoom to GameRoom
    io.emit('gameStarted', {start: true} );
    game_started = true;
    questionIndex = 1;
      setTimeout(() => {
        startGame();
      }, 4000);
  }
  let gameInterval;
  // set inital game parameters if the game has been started
  function startGame() {
    //create first question slot for responses 
    questionResponses[questionIndex] = {};
    fetch(`http://localhost:5000/questions/${questionIndex}`)
    .then(res => res.json())
    .then(json => {
      //questionIndex++;
      const questionData = json[0];
      emitTimer();
      // need to make the userPool incluse specifc user Data (pics)
      io.emit('userPool', userPool);
      io.emit('initializeGame', questionData);
      gameInterval = setInterval( () => {
        if (game_started) {
          emitTimer();
        }
      }, 1000);
    });
  }
  function emitTimer() {
    if (gameRoomTimer < 0){
      if(totalResponsesToCurrentQuestion !== Object.keys(userPool).length){
        let usersOnline = Object.keys(userPool);
        for (userID of usersOnline) {
          if (questionResponses[questionIndex][userID]){
            //do nothing
          } else {
            let options = ['optionA', 'optionB', 'optionC', 'optionD'];
            let selection = Math.floor(Math.random() * Math.floor(4));
            questionResponses[questionIndex][userID] = options[selection];
          }
        }
      }
      // Calculate match percentage
      calculateQuestionMatches(questionResponses, questionIndex, (percentageObject, perfectMatches) => {
        console.log(percentageObject);
        totalMatchPercentage[questionIndex] = percentageObject;
        totalPerfectMatches[questionIndex] = perfectMatches;
        calculateNewMatchAverage(totalMatchPercentage, (newMatchAvg) => {
          console.log('NEW-MATCH-AVERAGE', newMatchAvg);
          io.emit('perQMatches', newMatchAvg);
          questionIndex++;
          questionResponses[questionIndex] = {};
          getQuestion(questionIndex);
          gameRoomTimer = 15
        })         
      }) 
      totalResponsesToCurrentQuestion = 0;
    }
    io.emit('gameRoomTimer', gameRoomTimer);
    gameRoomTimer--;
  }
  function getQuestion(questionIndex) {
    if (questionIndex > 10) {
      game_started = false;
      clearInterval(gameInterval);
      questionIndex = 1;
      io.emit('gameOver', {game_started: false});
      onGameFinish();
    } else {
      fetch(`http://localhost:5000/questions/${questionIndex}`)
        .then(res => res.json())
        .then(json => {
          const questionData = json[0];
          io.emit('NextGameRoomQuestion', questionData);
        });
      }
  }
  function onGameFinish() {
    //SORT MATCHES, PICK TOP 3, KNEX TO ADD 3 TO DATABASE
    compileSumMatches(questionResponses, (sumMatches) => {
      console.log('_AVG-SUM-MATCHES: ', sumMatches);
      console.log('USER PROFILES: *****', usersProfiles);
      // Emit sumMatches to be rendered on client results page
      setTimeout(() => {
        io.emit('userMatches', { rankedMatches: sumMatches, grabMatchesInfo: usersProfiles } );
        // Reset Game State Data
        questionResponses = {};
        totalResponsesToCurrentQuestion = 0;
        totalPerfectMatches = {};
      }, 4000);
      // insert Match History
      insertMatch.insertMatchHistory(sumMatches, totalPerfectMatches, (insertSummary) => {
        console.log(insertSummary);
      });
    });
  }
  function addUserResponse(userResponse) {
    let {q_id, user_id, answer} = userResponse;
    // Option C failsafe
    if (answer === null || answer === "null") {
      answer = "optionC";
    }
    let questionObject = questionResponses[q_id];
    questionObject[user_id] = answer;
    //set the number of responses to question so far
    totalResponsesToCurrentQuestion = Object.keys(questionResponses[q_id]).length;
  }
  // one user answer incoming:
  socket.on('userAnswer', (userAnswerData) => {
    console.log("FROM CLIENT",userAnswerData);
    addUserResponse(userAnswerData);
    if (totalResponsesToCurrentQuestion === totalUsers) {
      questionMatch = userAnsPerQues(userAnswerData);
      // insert user_id and answer
      totalResponsesToCurrentQuestion = 0;
    }
  });
  // game over
  socket.on('gameOver', (userMatches) => {
    let rankedMatches = totalGameAnswers(userMatches, totalQuestions);
  io.emit('perQMatches', rankedMatches);
  });
});
// backend server port
app.listen(process.env.PORT || 5000, () => console.log('DealBreaker Server is running'))