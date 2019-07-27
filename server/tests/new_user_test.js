const fetch = require('node-fetch');

const userData = {
  user: {
    instagram_id: 123,
    username: 'testuser',
    full_name: 'test-user',
    access_token: 'atatatatat',
    profile_picture: 'https://placekitten.com/200/200',
    profile_picture_hd: 'https://placekitten.com/300/300',
    ageMonth: 9,
    ageDay: 2,
    ageYear: 2001,
    identifyAs: 'male',
    interestedIn: 'female',
    ageMin: 25,
    ageMax: 30
  }
}


fetch('http://localhost:5000/profile/new', {
        method: 'post',
        body: JSON.stringify(userData),
        headers: { 'Content-Type': 'application/json' },
    })
    .then(res => console.log(res))
    .then(json => console.log(json));