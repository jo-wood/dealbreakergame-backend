module.exports = {
  setUpUsers: function(gameAns) {
    let totalQuestions = 0;
    let userTracking = {};
    for (let q in gameAns) {
      totalQuestions++;
      let users = Object.keys(gameAns[q]);
      for (let user of users) {
        if (user in userTracking) {
          // do nothing
        } else {
          userTracking[user] = {};
        }
      }
    }
  return {totalQ: totalQuestions, userTracking}
  }
}