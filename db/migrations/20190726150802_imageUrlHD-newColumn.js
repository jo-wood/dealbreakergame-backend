
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.string('image_url_hd').defaultTo('https://upload.wikimedia.org/wikipedia/commons/f/f3/Nicolas_Cage_-_66%C3%A8me_Festival_de_Venise_%28Mostra%29.jpg');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(t) {
    t.dropColumn('image_url_hd');
  });
};
