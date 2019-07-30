module.exports = (knex) => ({

  insertMatchHistory: (sumMatches, totalPerfectMatches, callback) => {
    console.log("test");

    // Iterate through users
    Object.keys(sumMatches).forEach( (user) => {
      // Take Top 3
      let matchArray = sumMatches[user].slice(0, 3);
      console.log(user,':', matchArray);
      
      // Loop through matchArray and insertInto DB
      matchArray.forEach( (match) => {
        console.log(match);
        for (matchUser in match) {
          // Insert Each Match in DB
          console.log(matchUser, match[matchUser]);

          const currentDate = new Date()
          const year = currentDate.getFullYear();
          const month = currentDate.getMonth();
          const day = currentDate.getDay();

          knex
            .insert({
              user_a: user,
              user_b: matchUser,
              match_percent: match[matchUser],
              match_date: `${year}-${month}-${day}`, 
              match_detail_id: null,
              
            })
            .into('match')
            .returning('id')
            .then(([id]) => {
              const returnObject = {
                status: 'Match history insert completed',
                id: id
              }
              callback(returnObject);
            })
            .catch((err) => {
              console.log(err);
            })
        }
      })
    })
  }

})
