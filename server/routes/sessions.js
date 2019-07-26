const express = require('express');
const router  = express.Router();
const fetch = require('node-fetch');
const { URLSearchParams } = require('url');
const qs = require('qs');

module.exports = (knex) => {
  const checkUser = require('../utils/checkUser')(knex);
  const instagramPublicApi = require('../utils/instragramPublicApi');

  router.get("/", (req, res) => {
    res.send("sessions GET route hit");
  })


  router.post("/", (req, res) => {
    console.log("sessions POST route hit");
    console.log(req.body);
    const code = req.body.code;

    const params = new URLSearchParams();
    params.append('client_id', process.env.CLIENT_ID);
    params.append('client_secret', process.env.CLIENT_SECRET);
    params.append('grant_type', 'authorization_code');
    params.append('redirect_uri', process.env.REDIRECT_URI);
    params.append('code', code);
    

    const requestBody = {
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: process.env.REDIRECT_URI,
      code: code
    }

    fetch('https://api.instagram.com/oauth/access_token', {
      method: 'post',
      body: qs.stringify(requestBody),
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(res => res.json())
    .then(json => { 
      console.log(json);

      userObject = {
        user_id: json.user.id,
        username: json.user.username,
        access_token: json.access_token,
        full_name: json.user.full_name,
        profile_picture: json.user.profile_picture,
        profile_picture_hd: null,
        returning_user: null,
        logged_in: null
      };
     
      // Get Instagram HD image
      instagramPublicApi.getHighDefImage(json.user.id, (result) => {
        console.log('HD_URL_STRING: ', result.hd_url);
        userObject.profile_picture_hd = result.hd_url;
      
        // Check user in DB
        checkUser.authenticateUser(json.user.id, (userAuth) => {
          console.log(userAuth);
          
          if (userAuth.returningUser) {
            userObject.returning_user = true;
            userObject.logged_in = true;
            res.json(JSON.stringify(userObject));   
          }
          else {
            userObject.returning_user = false;
            userObject.logged_in = false;
            res.json(JSON.stringify(userObject)); 
          }
        })  
      })
      
    })
    .catch(err => console.error(err));;

  })

  return router;

}

