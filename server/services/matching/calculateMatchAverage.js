module.exports = {
  calculateMatchAverage: function(qArr, totalQuestions, callback) {
    console.log(qArr);
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
    //return userTotals;  
    callback(userTotals);
  },
  
  calculateNewMatchAverage: (responseObject, callback) => {
    const numOfQuestions = Object.keys(responseObject).length;
    averageResults = {};

    Object.keys(responseObject).forEach( (question) => {
      
      Object.keys(responseObject[question]).forEach( (currentUser) => {
        const matchData = responseObject[question][currentUser];
        
        if(!averageResults.hasOwnProperty(currentUser)){
          averageResults[currentUser] = matchData;
        } else {    
          for (let matchUser in matchData) {
            averageResults[currentUser][matchUser] += matchData[matchUser];
          }
        }           
      })
    })
    
    // Calculate Average
    for (user in averageResults) {
      for (matches in averageResults[user]) {
        console.log(averageResults[user][matches] / numOfQuestions);
        averageResults[user][matches] = averageResults[user][matches] / numOfQuestions
      }
    }

    callback(averageResults);

  }
  
  
}