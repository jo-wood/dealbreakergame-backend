// from folder db > seeds > seed_questions.js

console.log("Running Match History Seeds...");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('match').del()
    .then(() => {
      // Inserts seed entries
      return knex('match').insert([{
          user_a: 8,
          user_b: 1,
          match_percent: 90,
          match_date: '2019-08-20',
          match_detail_id: 8
        },
        {
          user_a: 8,
          user_b: 2,
          match_percent: 80,
          match_date: '2019-08-20',
          match_detail_id: 1
        },
        {
          user_a: 9,
          user_b: 10,
          match_percent: 90,
          match_date: '2019-08-10',
          match_detail_id: 2
        },
        {
          user_a: 4,
          user_b: 3,
          match_percent: 80,
          match_date: '2019-08-10',
          match_detail_id: 3
        },
        {
          user_a: 6,
          user_b: 9,
          match_percent: 70,
          match_date: '2019-08-10',
          match_detail_id: 4
        },
        {
          user_a: 3,
          user_b: 4,
          match_percent: 90,
          match_date: '2019-08-10',
          match_detail_id: 5
        },
        {
          user_a: 2,
          user_b: 4,
          match_percent: 80,
          match_date: '2019-08-10',
          match_detail_id: 6
        },
        {
          user_a: 2,
          user_b: 5,
          match_percent: 70,
          match_date: '2019-08-10',
          match_detail_id: 7
        }            
      ]);
    });
};