// from folder db > seeds > seed_questions.js

console.log("Running Match Detail Seeds...");
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('match_detail').del()
    .then(() => {
      // Inserts seed entries
      return knex('match_detail').insert([{
          q_id: 1,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 3,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 5,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 8,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 4,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 2,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 6,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 7,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 9,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 2,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 5,
          user_b_answered: 'optionB',
          sameAnswer: true,
        },
        {
          q_id: 7,
          user_b_answered: 'optionA',
          sameAnswer: false,
        },
        {
          q_id: 2,
          user_b_answered: 'optionD',
          sameAnswer: true,
        },
        {
          q_id: 5,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 2,
          user_b_answered: 'optionA',
          sameAnswer: false,
        },
        {
          q_id: 8,
          user_b_answered: 'optionB',
          sameAnswer: true,
        },
        {
          q_id: 1,
          user_b_answered: 'optionA',
          sameAnswer: true,
        },
        {
          q_id: 9,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 1,
          user_b_answered: 'optionB',
          sameAnswer: true,
        },
        {
          q_id: 4,
          user_b_answered: 'optionC',
          sameAnswer: false,
        },
        {
          q_id: 2,
          user_b_answered: 'optionC',
          sameAnswer: true,
        }
      ]);
    });
};