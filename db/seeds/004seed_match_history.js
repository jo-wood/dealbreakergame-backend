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
        },
        {
          user_a: 12,
          user_b: 9,
          match_percent: 75,
          match_date: '2019-07-01',
          match_detail_id: 9
        },
        {
          user_a: 12,
          user_b: 4,
          match_percent: 89,
          match_date: '2019-07-01',
          match_detail_id: 10
        },
        {
          user_a: 12,
          user_b: 8,
          match_percent: 60,
          match_date: '2019-07-01',
          match_detail_id: 11
        },
        {
          user_a: 13,
          user_b: 4,
          match_percent: 69,
          match_date: '2019-07-01',
          match_detail_id: 12
        },
        {
          user_a: 13,
          user_b: 3,
          match_percent: 90,
          match_date: '2019-07-01',
          match_detail_id: 13
        },
        {
          user_a: 14,
          user_b: 2,
          match_percent: 60,
          match_date: '2019-07-01',
          match_detail_id: 14
        },
        {
          user_a: 14,
          user_b: 3,
          match_percent: 73,
          match_date: '2019-07-01',
          match_detail_id: 15
        },
        {
          user_a: 14,
          user_b: 4,
          match_percent: 72,
          match_date: '2019-07-01',
          match_detail_id: 16
        },
        {
          user_a: 15,
          user_b: 1,
          match_percent: 79,
          match_date: '2019-07-01',
          match_detail_id: 17
        },
        {
          user_a: 15,
          user_b: 10,
          match_percent: 89,
          match_date: '2019-07-01',
          match_detail_id: 18
        },
        {
          user_a: 15,
          user_b: 11,
          match_percent: 81,
          match_date: '2019-07-01',
          match_detail_id: 19
        },
        {
          user_a: 15,
          user_b: 7,
          match_percent: 69,
          match_date: '2019-07-01',
          match_detail_id: 20
        },
        {
          user_a: 15,
          user_b: 6,
          match_percent: 81,
          match_date: '2019-07-01',
          match_detail_id: 21
        }
      ]);
    });
};