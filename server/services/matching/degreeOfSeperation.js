module.exports = {
  degreeOfSeperation: function(answer) {
    let map = [];
    switch (answer) {
      case 'optionA':
        map = [1, 2, 3, 2];
        break;
      case 'optionB':
        map = [2, 1, 2, 3];
        break;
      case 'optionC':
        map = [3, 2, 1, 2];
        break;
      case 'optionD':
        map = [2, 3, 2, 1];
        break;
      default:
        map = [];
    }
    return map;
  }
}