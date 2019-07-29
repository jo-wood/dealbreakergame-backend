const {calculatePerQuestionMatch} = require('./calculatePerQuestionMatch');

module.exports = {
  calculateQuestionMatches: (questionAnswers, questionIndex, callback) => {
    currentAnswerData = questionAnswers[questionIndex];
    let results = {};
    for (currentUser in currentAnswerData) {
      results[currentUser] = calculatePerQuestionMatch(currentAnswerData[currentUser], currentAnswerData);   
    }
    callback(results); 
  }

}