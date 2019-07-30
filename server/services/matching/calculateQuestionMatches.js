const {calculatePerQuestionMatch} = require('./calculatePerQuestionMatch');
const {calculateMatchAverage} = require('./calculateMatchAverage');

module.exports = {
  calculateQuestionMatches: (questionAnswers, questionIndex, callback) => {
    currentAnswerData = questionAnswers[questionIndex];
    let results = {};
    let perfectMatches = {};
    for (currentUser in currentAnswerData) {
      results[currentUser] = calculatePerQuestionMatch(currentAnswerData[currentUser], currentAnswerData);
      
      for (matchUser in results[currentUser]) {
        if (results[currentUser][matchUser] === 100) {
          perfectMatches[currentUser] = { matchUser: {
            q_id: questionIndex,
            user_b_answered: currentAnswerData[currentUser],
            sameAnswer: true
          }}
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