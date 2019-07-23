// from folder db > migrations > create_question.table.js


// QUESTIONS

exports.up = function (knex, Promise) {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id').primary();
    table.string('question');
    table.string('optionA');
    table.string('optionB');
    table.string('optionC');
    table.string('optionD');
  });
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTable('questions');
};