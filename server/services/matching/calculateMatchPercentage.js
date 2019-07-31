// to run with Dummy data for structure of responses:
const gameAnswers = require('../gameAnswers/dummyAnswers');
const { setUpUsers } = require('./setUpUsers');
const { sortedUserMatches } = require('./sortedUserMatches');
const { calculateMatchAverage } = require('./calculateMatchAverage');
const { calculatePerQuestionMatch } = require('./calculatePerQuestionMatch');
//const { finalGameData } = require('../../tests/insertMatchHistory_test');

function calculateSumMatches(game) {
  let setUp = setUpUsers(game);
  let totalQuestions = setUp.totalQ;
  let usersRanks = setUp.userTracking;
  let finalRanking = {};
  for (let user in usersRanks) {
    let userQTally = [];
    finalRanking[user] = {};
    for (let question in game) {
      let answers = game[question];
      let userChoice = answers[user];
      // console.log(userChoice, answers);
      let percent = calculatePerQuestionMatch(userChoice, answers);
      //console.log('PERCENT: ', percent);
      userQTally.push(percent)            
    }
    let average = calculateMatchAverage(userQTally, totalQuestions)
    //console.log('AVG: ', average);
    delete average[user];
    let sorted = sortedUserMatches(average);
    //console.log(sorted);
    finalRanking[user] = sorted;
  }  
  return finalRanking;
}




// //test dummyAnswers
//console.log('SUM-MATCHES: ', calculateSumMatches(gameAnswers))
//console.log('done');
// let questionAnswers = gameAnswers.q_Id_One;
// //console.log(calculatePerQuestionMatch('optionA', questionAnswers))