const fetch = require('node-fetch');

module.exports = {

  getHighDefImage: (instgramId, callback) => {
    fetch(`https://i.instagram.com/api/v1/users/${instgramId}/info/`)
    .then(res => res.json())
    .then(json => {
      if (json.user.hasOwnProperty('hd_profile_pic_url_info')) {
        callback( {hd_url: json.user.hd_profile_pic_url_info.url} )
      } else {
        callback( {hd_url: null} );
      }
    })

  }

}