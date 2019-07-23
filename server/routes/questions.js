const express = require('express');
const router  = express.Router();
require('dotenv').config()
const ENV = process.env.ENV || "development";
const knexConfig = require("../knexfile");
const knex = require("knex")(knexConfig[ENV]);




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

module.exports = router;

