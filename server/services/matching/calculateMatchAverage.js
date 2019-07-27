module.exports = {
  calculateMatchAverage: function(qArr, totalQuestions) {
    let userTotals = {};
    for (let q of qArr) {
    let users = Object.keys(q);
      // add them users as keys
      for (let user of users) {
        if (user in userTotals) {
          // do nothing      
        } else {
          userTotals[user] = 0;
        }
      }
      for (let user of users ) {
        userTotals[user] += q[user]
      }
    }
    
    for (let result in userTotals) {
      userTotals[result] = Math.floor(userTotals[result] / totalQuestions);
    }
    return userTotals;  
  }
}