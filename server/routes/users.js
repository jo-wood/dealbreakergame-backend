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

  // Enter new user in DB
  router.post("/new", (req, res) => {
    console.log(req.body);
    const userObject = req.body;
    console.log('userObject: ', userObject);
    
    // Compile birthdate
    const birthdate = `${userObject.ageYear}-${userObject.ageMonth}-${userObject.ageDay}`

    // Insert new user
    knex
      .insert({
        instagram_id: userObject.instagram_id,
        username: userObject.username,
        full_name: userObject.full_name,
        access_token: userObject.access_token,
        birthdate: birthdate,
        identifyAs: userObject.identifyAs,
        interestedIn: userObject.interestedIn,
        age_perference_min: userObject.ageMin,
        age_perference_max: userObject.ageMax,
        image_url: userObject.profile_picture,
        image_url_hd: userObject.profile_picture_hd,     
      })
      .into('users')
      .returning('id')
      .then((result) => {
        res.json({"test":"test"});
      })
      .catch((err) => {
        res.status(500).send('Sorry, something went wrong. Please try again.')
      })

      // // .then(([id]) => {
      // //   console.log(id);
      // //   // const returnObject = {
      // //   //   status: 'completed',
      // //   //   id: id
      // //   // }
      // //   // res.json(JSON.parse(returnObject));
      // // })
      // .catch((err) => {
      //   res.status(500).send('Sorry, something went wrong. Please try again.')
      // });
    
  })

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