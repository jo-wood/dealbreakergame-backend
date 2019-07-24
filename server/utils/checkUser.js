module.exports = (knex) => ({

  authenticateUser: (instgramId, callback) => { 
    knex
      .select('username', 'instagram_id')
      .from('users')
      .where('instagram_id', instgramId)
      .then( (results) => {
        
        if (results.length === 0) {
          callback( {returningUser: false} );
        } else if (results.length >= 1) {
          console.log('RESULTS: ', results);
          callback( {returningUser: true} );
        }
        
    });

  }

})