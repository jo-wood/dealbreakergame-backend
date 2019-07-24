// SESSION

exports.up = function (knex, Promise) {
    return knex.schema.createTable('session', function (table) {
      table.increments('id').primary();
      table.date('created_on');
      table.integer('user_id');
      table.boolean('gameOver');
    });
  };
  exports.down = function (knex, Promise) {
    return knex.schema.dropTable('session');
  };