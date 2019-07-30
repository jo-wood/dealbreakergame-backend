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
          image_url: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=335&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1428931996691-a5108d4cdbf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1528478794082-34720eead2c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1528478794082-34720eead2c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1543080853-556086153871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1543080853-556086153871?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
        },
        {
          full_name: 'Levi',
          username: 'liveforever',
          email: 'levi@gmail.com',
          birthdate: '1989-08-22',
          access_token: '343782ahfjeeeioetu38293832e1a02e53f2',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '219080136',
          image_url: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1524772128034-3ecf9a73cbe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80',
          image_url_hd:'https://images.unsplash.com/photo-1524772128034-3ecf9a73cbe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd:'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80',
          image_url_hd: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=150&q=80'
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
          image_url: 'https://scontent.cdninstagram.com/vp/5c562a5550d35dc3ff2fadbad1f6913b/5DB424DD/t51.2885-19/s150x150/17437669_1797569223842145_7568508965768658944_a.jpg?_nc_ht=scontent.cdninstagram.com',
          image_url_hd: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/683b28a941d4b6f72c6c26cc2db703ef/5DD2EFA5/t51.2885-19/17437669_1797569223842145_7568508965768658944_a.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net'
        },
        {
          full_name: 'John Schindler',
          username: 'schindler553',
          email: 'sample@dealbreaker.com',
          birthdate: '1989-02-23',
          access_token: 'no_access_token_yet',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 19,
          age_perference_max: 25,
          instagram_id: '17180823669',
          image_url: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/f91c83fcc1a375b8438382fb084395e2/5DCCAE9B/t51.2885-19/s320x320/67311211_1677638852381193_4160517678420721664_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net',
          image_url_hd: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/abe0fcae4de391d2dc80af42bec4e7f6/5DE48A9B/t51.2885-19/67311211_1677638852381193_4160517678420721664_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net'
        },
        {
          full_name: 'Bert Williams',
          username: 'bert.will23',
          email: 'sample1@dealbreaker.com',
          birthdate: '1991-03-13',
          access_token: 'no_access_token_yet',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 29,
          instagram_id: '17180823669',
          image_url: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/cd7909197f34a0d484a271b395dd4a28/5DDAAF26/t51.2885-19/s320x320/67779239_654955315006935_8794284707832397824_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net',
          image_url_hd: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/5d0c283774dd137efa73f5e61af97c2f/5DE1512C/t51.2885-19/67779239_654955315006935_8794284707832397824_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net'
        },
        {
          full_name: 'Todd Haynes',
          username: 'todd.hayn',
          email: 'sample2@dealbreaker.com',
          birthdate: '1989-01-29',
          access_token: 'no_access_token_yet',
          identifyAs: 'male',
          interestedIn: 'female',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '17328494663',
          image_url: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/2ed571f6868ed02160c12abe65e9aba1/5DDA5832/t51.2885-19/s320x320/67309611_437292433528968_4033728852273397760_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net',
          image_url_hd: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/6b68aa67eb71f9595b9520c32d415bf6/5DE50C38/t51.2885-19/67309611_437292433528968_4033728852273397760_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net'
        },
        {
          full_name: 'Naomi Poser',
          username: 'naomi.poser43',
          email: 'Junaid.push@gmail.com',
          birthdate: '1989-01-20',
          access_token: 'no_access_token_yet',
          identifyAs: 'female',
          interestedIn: 'males',
          age_perference_min: 20,
          age_perference_max: 35,
          instagram_id: '17401937017',
          image_url: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/4bb2f3b23e74d8b25c9a3484c2da47cd/5DDCD108/t51.2885-19/s320x320/66818586_396349500997787_4475501964204965888_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net',
          image_url_hd: 'https://instagram.fykz1-1.fna.fbcdn.net/vp/f110f6a6df4d004f0e754fc99b76ebe1/5DDEC302/t51.2885-19/66818586_396349500997787_4475501964204965888_n.jpg?_nc_ht=instagram.fykz1-1.fna.fbcdn.net'
        }
      ]);
    });
};