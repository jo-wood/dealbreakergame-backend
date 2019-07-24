const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    console.log("questions GET route hit");

    knex
      .select()
      .from('questions')
      .then((results) => {
        console.log(results)
        res.json(results);
      });

    });

    router.get("/:id", (req, res) => {
      console.log("questions GET route hit");
  

      // question.fetchSingleQueston(req.params.id)
      
      knex
        .select()
        .from('questions')
        .then((results) => {
          console.log(results)
          res.json(results);
        });
  
      });

  return router
}


// models/question.js

// module.exports = (knex) => {

//   return ({
//     fetchAllQuestions: () => {

//     },
//     fetchSingleQueston: (id) => {
//       return knex
//         .select()
//         .from('questions')
//         .where("id", "=", id)
//         .then(res => res)
//     }
//   })


// }

// module.exports = router;

