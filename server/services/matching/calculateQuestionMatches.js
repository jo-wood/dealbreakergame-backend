const {calculatePerQuestionMatch} = require('./calculatePerQuestionMatch');
const {calculateMatchAverage} = require('./calculateMatchAverage');

module.exports = {
  calculateQuestionMatches: (questionAnswers, questionIndex, callback) => {
    currentAnswerData = questionAnswers[questionIndex];
    let results = {};
    for (currentUser in currentAnswerData) {
      results[currentUser] = calculatePerQuestionMatch(currentAnswerData[currentUser], currentAnswerData);   
    }

    // let newResults = calculateMatchAverage([results], 2, (averageData) => {
    //   callback(averageData)

    // });

    callback(results); 
  }

}