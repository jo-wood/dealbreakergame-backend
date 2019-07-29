const {calculateQuestionMatches} = require('../services/matching/calculateQuestionMatches');

questionOneAnswers = {
  1: {
    11: 'optionD',
    8: 'optionB',
    4: 'optionA',
    6: 'optionC',
    2: 'optionA',
    3: 'optionC'
  },
  2: {
    11: 'optionA',
    8: 'optionB',
    4: 'optionC',
    6: 'optionC',
    2: 'optionD',
    3: 'optionB'
  }
}

console.log(typeof calculateQuestionMatches);
calculateQuestionMatches(questionOneAnswers, 1, (percentageObject) => {
  console.log(percentageObject);
}) 

