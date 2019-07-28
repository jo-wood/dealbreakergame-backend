const express = require('express');
const app = express();
var socketServer = require('http').Server(app);
var io = require('socket.io')(socketServer);
const fetch = require('node-fetch');

// Game Data:
// ---> update to say how many are in game once gameStarted is true
let nextGameTime =  new Date(2019, 6, 28, 20, 0, 0)
const totalUsers = 10;
let game_over = false;
const userResponses = {};
const { userAnsPerQues } = require('./services/gameAnswers/userAnsPerQues');
const { totalGameAnswers } = require('./services/gameAnswers/totalGameAnswers');

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


let gameRoomTimer = 15;  // declared outside of io
let questionIndex = 1;  // use 2 since inital game start sends first Q
// -----> SocketServer
socketServer.listen(5001);
//socketServer.use(cors());

io.on('connection', function (socket) {
  console.log("connection made");

  //send next game start time
  io.emit('setNextGameTime', nextGameTime );

  // chatroom messages:
  socket.on('message', (messageData) => {
    console.log(messageData);
    io.emit('message', messageData);
  });
  
  // set inital game parameters     //DONT WE TELL THEM THE GAME HAS STARTED ???
  socket.on('gameStarted', (gameData) => {
// ---> update to say how many are in game once gameStarted is true
      fetch(`http://localhost:5000/questions/${questionIndex}`)
        .then(res => res.json())
        .then(json => {
          const questionData = json[0];
          emitTimer();
          // need to make the userPool incluse specifc user Data (pics)
          io.emit('initializeGame', questionData);
    });
  });

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
      io.emit('gameStatus', {game_over: true});
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
    userResponses.add
  }

  setInterval( emitTimer, 2000);  // slow down socket connection

  // one user answer incoming:
  socket.on('userAnswer', (userAnswerData) => {
    console.log(userAnswerData);
    addUserResponse(userAnswerData);
    allAnswerPerQuestion = {};
    if (totalUsers === 10) {
      questionMatch = userAnsPerQues(userAnswerData);
      // insert user_id and answer
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