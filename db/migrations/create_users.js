// from folder db > migrations > create_users.js

// USERS

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('name');
    table.string('email')
    table.string('lookingFor');
    table.string('identifyAs');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};