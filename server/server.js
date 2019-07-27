const express = require('express');
const app = express();
var socketServer = require('http').Server(app);
var io = require('socket.io')(socketServer);

// Game Data:
let currentQuestion = 0;
let gameStarted = false;
let gameTimer = 15;
const totalQuestions = 0;
const totalUsers = 0;
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

// -----> SocketServer
socketServer.listen(5001);
//socketServer.use(cors());

io.on('connection', function (socket) {
  console.log("connection made");

  // chatroom messages:
  socket.on('message', (messageData) => {
    console.log(messageData);
    io.emit('message', messageData);
  });

  
  // set inital game parameters
  socket.on('gameStarted', (gameData) => {
    const { questionCount, userCount } = gameData;
    totalQuestions = questionCount;
    totalUsers = userCount;
  });

  //set game room timer and when timer hits zero send new question and reset timer (15)
  let gameRoomTimer = 15;
  function emitTimer() {
    if (gameRoomTimer < 0){
      io.emit('NextGameRoomQuestion', {question: getQuestion()})
      gameRoomTimer = 15
    }
    io.emit('gameRoomTimer', {gameRoomTimer: gameRoomTimer});
    gameRoomTimer--;
    console.log(gameRoomTimer);
  }
  
  function getQuestion() {
    let question = {}
    return question;
  }

  setInterval( emitTimer, 1000);  // slow down socket connection

  // one user answer incoming:
  socket.on('userAnswer', (userAnswerData) => {
    let questionMatch = userAnsPerQues(userAnswerData);
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