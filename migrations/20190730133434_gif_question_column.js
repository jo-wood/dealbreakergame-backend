
exports.up = function(knex, Promise) {
    return knex.schema.table('question', function(t) {
        t.string('gif_url').defaultTo('https://i.gifer.com/YILQ.gif');
      });
};
exports.down = function(knex, Promise) {
    return knex.schema.table('question', function(t) {
        t.dropColumn('gif_url');
      });
};
