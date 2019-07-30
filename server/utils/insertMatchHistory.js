module.exports = (knex) = ({

  insertMatchHistory: (sumMatches, callback) => {
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



        }
      })
    })
  }

})
