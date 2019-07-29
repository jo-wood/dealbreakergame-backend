const { questionMatchPercentage } = require('./questionMatchPercentage');

module.exports = {
  calculatePerQuestionMatch: function(userChoice, questionAnswers) {
    let storeMatchAns = {};
    for (let user in questionAnswers) {
      let matchChoice = questionAnswers[user];
      //console.log(matchChoice);
      storeMatchAns[user] = questionMatchPercentage(userChoice, matchChoice);
    }
    return storeMatchAns;
  }
}