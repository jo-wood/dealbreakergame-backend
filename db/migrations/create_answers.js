// SESSION

exports.up = function (knex, Promise) {
    return knex.schema.createTable('answer', function (table) {
      table.increments('id').primary();
      table.string('selectedAnswer');
      table.string('dealbreaker');
    });
  };
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('answer');
  };