// Game Data:
const totalQuestions = 10;
const { userAnsPerQues } = require('../services/gameAnswers/userAnsPerQues');
const { totalGameAnswers } = require('../services/gameAnswers/totalGameAnswers');
// data that would come from client socket.on (as the variable):
const { userAnswerData } = require('./userAnswerDataDummy');
const { userMatches } = require('./userMatchesDummy');


  // calc per question users matches
    let questionMatch = userAnsPerQues(userAnswerData);
    console.log(questionMatch);
    
  // game over, rank the matches from incoming client
    let rankedMatches = totalGameAnswers(userMatches, totalQuestions);
    console.log(rankedMatches);