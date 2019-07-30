const gameAnswers = require('../gameAnswers/dummyAnswers');
const { setUpUsers } = require('./setUpUsers');
const { sortedUserMatches } = require('./sortedUserMatches');
const { calculateMatchAverage } = require('./calculateMatchAverage');
const { calculatePerQuestionMatch } = require('./calculatePerQuestionMatch');
const { newSortMatchesArray } = require('./newSortMatches');

module.exports  = {

  compileSumMatches: (game, callback) => {
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
        userQTally.push(percent)            
      }
      let average = calculateMatchAverage(userQTally, totalQuestions)
      delete average[user];

      //let sorted = sortedUserMatches(average);
      let sorted = newSortMatchesArray(average)

      finalRanking[user] = sorted;
    }  
    callback(finalRanking);
  }
}