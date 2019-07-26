const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  // Return all users
  router.get("/", (req, res) => {
    console.log("profile GET route hit");

    knex
      .select()
      .from('users')
      .then((results) => {
        console.log(results)
        res.json(results);
      });

  });

  // Return user info matching id
  router.get("/:id", (req, res) => {
    console.log("profile GET with ID param hit");

    knex
      .select()
      .from('users')
      .where('id', req.params.id)
      .then((results) => {
        console.log(results)
        res.json(results);
      });

  });

  // Return user info matching id
  router.get("/:id/matches", (req, res) => {
  console.log("profile GET with ID and Match route hit");
  const userId = req.params.id;
    
    knex
      .select('*', knex.ref('user_b').as('x'))
      .from('match')
      .where('user_a', userId)
      .union([
        knex.select('*', knex.ref('user_a').as('x'))
          .from('match')
          .where('user_b', userId) 
      ])
      .innerJoin('users', 'x', 'users.id')




      .then((results) => {
        console.log(results)
        res.json(results);
      });
    
      //   knex('users')
      //    .select(knex.ref('Id').as('UserId'))
      // 
      
      // select `Id` as `UserId` from `users`
     
5
  });


    // router.get("/:id/matches/:match_id", (req, res) => {
    //   console.log("profile GET with ID and Match route hit");
  
    //   knex
    //     .select()
    //     .from('users')
    //     .where('id', req.params.id)
    //     .then((results) => {
    //       console.log(results)
    //       res.json(results);
    //     });
  
    // });



  return router
}