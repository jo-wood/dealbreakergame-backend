const {calculatePerQuestionMatch} = require('./calculatePerQuestionMatch');
const {calculateMatchAverage} = require('./calculateMatchAverage');

module.exports = {
  calculateQuestionMatches: (questionAnswers, questionIndex, callback) => {
    currentAnswerData = questionAnswers[questionIndex];
    let results = {};
    let perfectMatches = {};
    for (currentUser in currentAnswerData) {
      results[currentUser] = calculatePerQuestionMatch(currentAnswerData[currentUser], currentAnswerData);
      console.log("CURRENT USER", currentUser);
      for (matchUser in results[currentUser]) {
        console.log("MATCH USER", matchUser);
        if (results[currentUser][matchUser] === 100) {
          console.log(`${currentUser} and ${matchUser} had perfect match`)
          if (currentUser !== matchUser){
            perfectMatches[currentUser] = { [matchUser]: {
              q_id: questionIndex,
              user_b_answered: currentAnswerData[currentUser],
              sameAnswer: true
            }}
          }
        } else {
          console.log(`${currentUser} did not perfect match`)
        }
      }

      //determine if the match precentage is 100%
      if (results[currentUser] === 100) {
        //log this question id and pass back to server.js ONLY if its top 3
      }
    }

    // let newResults = calculateMatchAverage([results], 2, (averageData) => {
    //   callback(averageData)

    // });

    console.log("PERFECT MATCHES",perfectMatches)
    callback(results); 
  }

}