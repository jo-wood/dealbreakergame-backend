// MATCH

exports.up = function (knex, Promise) {
    return knex.schema.createTable('match', function (table) {
      table.date('created_on');
      table.integer('user_id');
      table.integer('match_id');
      table.integer('score');
    });
  };
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('match');
  };