// from folder db > seeds > seed_users.js

console.log("Running User Seeds....");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([{
          name: 'Jackson',
          email: 'jackson@gmail.com',
          lookingFor: 'female',
          identifyAs: 'male'
        },
        {
          name: 'Sab',
          email: 'sabrina@gmail.com',
          lookingFor: 'male',
          identifyAs: 'female'
        },
        {
          name: 'Levi',
          email: 'levi@gmail.com',
          lookingFor: 'female',
          identifyAs: 'male'
        },
        {
          name: 'Daniel',
          email: 'dan@gmail.com',
          lookingFor: 'female',
          identifyAs: 'male'
        },
        {
          name: 'Caleb',
          email: 'caleb@gmail.com',
          lookingFor: 'female',
          identifyAs: 'male'
        },
        {
          name: 'June',
          email: 'june@gmail.com',
          lookingFor: 'female',
          identifyAs: 'female'
        },
        {
          name: 'Monica',
          email: 'monny@gmail.com',
          lookingFor: 'female',
          identifyAs: 'female'
        },
        {
          name: 'Max',
          email: 'max@gmail.com',
          lookingFor: 'female',
          identifyAs: 'preferNotToSay'
        },
        {
          name: 'Taylor',
          email: 'tay@gmail.com',
          lookingFor: 'noPreference',
          identifyAs: 'preferNotToSay'
        },
        {
          name: 'Riley',
          email: 'riley@gmail.com',
          lookingFor: 'noPreference',
          identifyAs: 'male'
        }
      ]);
    });
};