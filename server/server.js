const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser')
const sessionsRoutes = require('./routes/sessions');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'));
app.get('/hello', (req, res) => res.send('Hello World!'))


app.use("/sessions", sessionsRoutes);




app.listen(process.env.PORT || 5000, () => console.log('DealBreaker Server is running'))