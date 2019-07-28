const { calculatePerQuestionMatch } = require('../matching/calculatePerQuestionMatch');
const { setUpUsers } = require('../matching/setUpUsers');


function calculateSumMatches(answers) {
  let questionMatches = {};
  const users = Object.keys(answers);
  for (let user of users) {
    let userChoice = answers[user];
    questionMatches[user] = calculatePerQuestionMatch(userChoice, answers);
  } 
  return questionMatches;
}

module.exports = {
  userAnsPerQues: (qAndData) => {
    // need q_id for storing in database (answers here is q_id)
    const answers = qAndData.questionId;
    let questionMatches = calculateSumMatches(answers);
    return questionMatches;
  }

};