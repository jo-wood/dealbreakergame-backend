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
const userResponses = {};
const { userAnsPerQues } = require('./services/gameAnswers/userAnsPerQues');
const { totalGameAnswers } = require('./services/gameAnswers/totalGameAnswers');
let gameRoomTimer = 15;  // declared outside of io


// Question Data
let questionIndex = 1;  //
const questionResponses = {};
let totalResponsesToCurrentQuestion = 0;

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

// -----> UserPoole
const userPool = {};

// Game Status Check Loop


// -----> SocketServer
socketServer.listen(5001);
//socketServer.use(cors());

io.on('connection', function (socket) {
  console.log("connection made");

  //send next game start time
  io.emit('setNextGameTime', nextGameTime );

  socket.on('triggerStart', (data) => {
    console.log(data);
    if (data === 'true') {
      console.log('start happened');
      startGame();
    }
  });

  // New connected user --> store in local object
  socket.on('newUser', (userInfo) => {
    userPool[userInfo.user_id] = userInfo.profile_picture;
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
  
  // set inital game parameters if the game has been started
  function startGame() {
    //create first question slot for responses 
    questionResponses[questionIndex] = {};
    questionResponses
    fetch(`http://localhost:5000/questions/${questionIndex}`)
    .then(res => res.json())
    .then(json => {
      questionIndex++;
      const questionData = json[0];
      emitTimer();
      // need to make the userPool incluse specifc user Data (pics)
      io.emit('initializeGame', questionData);
      setInterval( emitTimer, 1000);
    });
  }


  //set game room timer and when timer hits zero send new question and reset timer (15)
  // let gameRoomTimer = 15; // inside io connection
  // let questionIndex = 1; // inside io connection
  function emitTimer() {
    if (gameRoomTimer < 0){
      getQuestion(questionIndex);
      gameRoomTimer = 15
      questionIndex++;
    }
    io.emit('gameRoomTimer', gameRoomTimer);
    gameRoomTimer--;
  }
  
  function getQuestion(questionIndex) {
    if (questionIndex > 10) {
      game_over = true;
      io.emit('gameOver', {game_started: false});
      //SORT MATCHES, PICK TOP 3, KNEX TO ADD 3 TO DATABASE
    } else {
      fetch(`http://localhost:5000/questions/${questionIndex}`)
        .then(res => res.json())
        .then(json => {
          const questionData = json[0];
          io.emit('NextGameRoomQuestion', questionData);
        });
      }

  }

  function addUserResponse(userResponse) {
    let currentQuestionObject = questionResponses[questionIndex];
    currentQuestionObject[userResponse.user_id] = userResponse.answer;
    //set the number of responses to question so far
    totalResponsesToCurrentQuestion = Object.keys(questionResponses[questionIndex]).length;
  }

  //setInterval( emitTimer, 2000);  // slow down socket connection

  // one user answer incoming:
  socket.on('userAnswer', (userAnswerData) => {
    console.log("FROM CLIENT",userAnswerData);
    addUserResponse(userAnswerData);
    if (totalResponsesToCurrentQuestion === totalUsers) {
      questionMatch = userAnsPerQues(userAnswerData);
      // insert user_id and answer
      totalResponsesToCurrentQuestion = 0;
    }

    io.emit('perQMatches', questionMatch);
  });

  // game over
  socket.on('gameOver', (userMatches) => {
    let rankedMatches = totalGameAnswers(userMatches, totalQuestions);
  io.emit('perQMatches', rankedMatches);
  });

});

app.use(morgan('dev'));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'));

app.use("/sessions", sessionsRoutes(knex));
app.use("/questions", questionsRoutes(knex));
app.use("/profile", userProfileRoutes(knex));

app.listen(process.env.PORT || 5000, () => console.log('DealBreaker Server is running'))