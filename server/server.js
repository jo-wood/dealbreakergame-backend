const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');
const bodyParser = require('body-parser')
const port = 5000;
const sessionsRoutes = require('./routes/sessions');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('public'));
app.get('/hello', (req, res) => res.send('Hello World!'))


app.use("/sessions", sessionsRoutes);




app.listen(port, () => console.log(`Example app listening on port ${port}!`))