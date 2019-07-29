//function to get precent match with other users
//parameters are the index value of the selection you made and the selection the other user name.
//returns a precentage between 33% to 100%
//0% is give to individuals who dont respond

const { degreeOfSeperation } = require('./degreeOfSeperation');

module.exports = {
  questionMatchPercentage: function(user_choice, match_choice) {
    //console.log('USER: ', user_choice, 'MATCH: ', match_choice);
    let map = degreeOfSeperation(user_choice);
    let degree = 0;
      switch (match_choice) {
        case 'optionA':
          degree = map[0];
          break;
        case 'optionB':
          degree = map[1];
          break;
        case 'optionC':
          degree = map[2];
          break;
        case 'optionD':
          degree = map[3];
          break;
        default:
          degree = 0;
          break;
    }
    if  (match_choice !== undefined) {
        return (Math.floor(100 / degree))
    } else {
        return 0;
    }
  }
}