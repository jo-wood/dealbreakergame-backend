const express = require('express');
const app = express();
require('dotenv').config()
const ENV = process.env.ENV || "development";
const cors = require('cors');
const bodyParser = require('body-parser')

// Routes
const sessionsRoutes = require('./routes/sessions');
const questionsRoutes = require('./routes/questions');

// ----->
const knexConfig = require("./knexfile");
const knex = require("knex")(knexConfig[ENV]);
const morgan = require('morgan');
const knexLogger = require('knex-logger');

app.use(morgan('dev'));
// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'));
app.get('/hello', (req, res) => res.send('Hello World!'))


app.use("/sessions", sessionsRoutes);
app.use("/questions", questionsRoutes);



app.listen(process.env.PORT || 5000, () => console.log('DealBreaker Server is running'))