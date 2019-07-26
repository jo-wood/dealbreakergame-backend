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

    knex.raw( `select *
      from  (select user_a x, match_percent, match_date from match where user_b = ${userId} UNION select user_b x, match_percent, match_date from match where user_a = ${userId}) as u 
      inner join users on u.x = users.id;`)  
      .then((results) => {
        console.log(results)
        res.json(results.rows);
      });
     
 });


  router.get("/:id/matches/details", (req, res) => {
    console.log("profile GET with ID and Match route hit");
    const userId = req.params.id;

    knex
      .select()
      .from('match')
      .where('user_a', userId)
      .orWhere('user_b', userId)
      .innerJoin('match_detail', 'match.match_detail_id', 'match_detail.id')
      .innerJoin('question', 'match_detail.q_id', 'question.id')
      .then((results) => {
        console.log(results)
        res.json(results);
      });
    
  });



  return router
}