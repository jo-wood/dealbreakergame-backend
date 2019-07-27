// const { setUpUsers } = require('./setUpUsers');
// const { calculateMatchAverage } = require('./calculateMatchAverage');
const { sortedUserMatches } = require('../matching/sortedUserMatches');

function calculateSumMatches(userMatchData, totalQuestions) {
  let sorted = sortedUserMatches(userMatchData);
  return sorted;
}

module.exports = {
  totalGameAnswers: (userMatchData, totalQuestions) => {
    const rankedMatches = calculateSumMatches(userMatchData, totalQuestions);
    return rankedMatches;
  }
};


//* use this in the client to calc average for each matches answers:

// function calculateSumMatches(userMatchData, totalQuestions) {
  // let setUp = setUpUsers(userMatchData);
  // let usersRanks = setUp.userTracking;
  // let finalRanking = {};
  // for (let user in usersRanks) {
  //   let userQTally = [];
  //   finalRanking[user] = {};
  //   for (let question in userMatchData) {
  //     let percentMatch = userMatchData[question];
  //     userQTally.push(percentMatch)            
  //   }
  //   let average = calculateMatchAverage(userQTally, totalQuestions)
  //   delete average[user];
  // let sorted = sortedUserMatches(average);
  // finalRanking[user] = sorted;
  // }
  // return finalRanking;
// }
