
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.string('image_url_hd').defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.dropColumn('image_url_hd');
  });
};
