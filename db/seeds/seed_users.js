// from folder db > seeds > seed_users.js

console.log("Running User Seeds....");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([{
          full_name: 'Jackson Barr',
          username: 'jjboi',
          email: 'jackson@gmail.com',
          birthdate: '1990-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 24,
          age_perference_max: 30,
          instagram_id: '249050156',
          image_url: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80'
        },
        {
          full_name: 'Sab Moore',
          username: 'jjboi',
          email: 'sabrina@gmail.com',
          birthdate: '1990-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'female',
          interestedIn: 'male',
          age_perference_min: 25,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Monica M',
          username: 'monica_forever',
          email: 'monny@gmail.com',
          birthdate: '1992-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'female',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'June Bug',
          username: 'junebug_99',
          email: 'june@gmail.com',
          birthdate: '1985-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'female',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1528478794082-34720eead2c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Caleb Unz',
          username: 'caleb1782',
          email: 'caleb@gmail.com',
          birthdate: '1987-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1543080853-556086153871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },        
        {
          full_name: 'Daniel',
          username: 'dan_the_man',
          email: 'dan@gmail.com',
          birthdate: '1991-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Levi',
          username: '',
          email: 'levi@gmail.com',
          birthdate: '1989-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },        
        {
          full_name: 'Max Bloom',
          username: 'maxmoney99',
          email: 'max@gmail.com',
          birthdate: '1988-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'preferNotToSay',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1524772128034-3ecf9a73cbe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Taylor S',
          username: 'tay_for_days',
          email: 'tay@gmail.com',
          birthdate: '1995-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'preferNotToSay',
          interestedIn: 'noPreference',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Riley McDonald',
          username: 'riley_mcdon',
          email: 'riley@gmail.com',
          birthdate: '1993-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'noPreference',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'PULLBOXLAB',
          username: 'pullboxlab',
          email: 'contact@pullboxlab.com',
          birthdate: '1990-08-22',
          access_token: '3437822196.8471be6.f1e642b5072744f0abb855e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 24,
          age_perference_max: 30,
          instagram_id: '3437822196',
          image_url: 'https://scontent.cdninstagram.com/vp/5c562a5550d35dc3ff2fadbad1f6913b/5DB424DD/t51.2885-19/s150x150/17437669_1797569223842145_7568508965768658944_a.jpg?_nc_ht=scontent.cdninstagram.com'
        }     
      ]);
    });
};