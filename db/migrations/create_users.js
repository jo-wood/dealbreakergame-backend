// from folder db > migrations > create_users.js

// USERS

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments();
    table.string('full_name');
    table.string('username');
    table.string('email');
    table.string('access_token');
    table.date('birthdate');
    table.string('identifyAs');
    table.string('interestedIn');
    table.integer('age_perference_min');
    table.integer('age_perference_max');
    table.string('instagram_id');
    table.string('image_url');
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};