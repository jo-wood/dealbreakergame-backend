const { compileSumMatches } = require('../services/matching/compileSumMatches');
const { insertMatchHistory } = require('../utils/insertMatchHistory');
const finalGameData = { 
  '1': { '11': 'optionD', '12': 'optionD', '8': 'optionA', '6': 'optionB', '3': 'optionA', '2': 'optionB' },
  '2': { '11': 'optionA', '12': 'optionC', '8': 'optionC', '6': 'optionA', '3': 'optionB', '2': 'optionD' },
  '3': { '11': 'optionA', '12': 'optionA', '8': 'optionD', '6': 'optionC', '3': 'optionA', '2': 'optionB' },
  '4': { '11': 'optionB', '12': 'optionB', '8': 'optionA', '6': 'optionB', '3': 'optionD', '2': 'optionA' },
  '5': { '11': 'optionA', '12': 'optionA', '8': 'optionC', '6': 'optionB', '3': 'optionD', '2': 'optionB' },
  '6': { '11': 'optionC', '12': 'optionC', '8': 'optionA', '6': 'optionD', '3': 'optionC', '2': 'optionD'},
  '7': { '11': 'optionD', '12': 'optionD', '8': 'optionA', '6': 'optionB', '3': 'optionA', '2': 'optionB' },
  '8': { '11': 'optionA', '12': 'optionA', '8': 'optionB', '6': 'optionA', '3': 'optionB', '2': 'optionA' },
  '9': { '11': 'optionC', '12': 'optionB', '8': 'optionC', '6': 'optionB', '3': 'optionA', '2': 'optionB' },
  '10': { '11': 'optionD', '12': 'optionA', '8': 'optionA', '6': 'optionC', '3': 'optionD', '2': 'optionC' },
  '11': {} 
}

compileSumMatches(finalGameData, (sumMatches) => {
  console.log('SUM-MATCHES: ', sumMatches);

  // insert Match History
  insertMatchHistory(sumMatches, (insertSummary) => {

  });


});


