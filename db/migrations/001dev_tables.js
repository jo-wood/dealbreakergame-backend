// create dev_tables and seeds

exports.up = function (knex, Promise) {
    return knex.schema
      .createTable('users', function (table) {
        table.increments('id').primary();
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
      })

      .createTable('question', function (table) {
            table.increments('id').primary();
            table.string('context');
            table.string('optionA');
            table.string('optionB');
            table.string('optionC');
            table.string('optionD');
      })

      .createTable('match_detail', function (table) {
        table.increments('id').primary();
        table.integer('q_id').unsigned();
        table.foreign('q_id').references('question.id');
        table.string('user_b_answered');
        table.boolean('sameAnswer');
      })

      .createTable('match', function (table) {
        table.increments('id').primary();
        table.date('match_date');
        table.integer('match_percent');
        table.integer('user_a').unsigned();
        table.foreign('user_a').references('users.id');
        table.integer('user_b').unsigned();
        table.foreign('user_b').references('users.id');
        table.integer('match_detail_id').unsigned();
        table.foreign('match_detail_id').references('match_detail.id');
      })

  };

  exports.down = function (knex, Promise) {
    return knex.schema
      .dropTable('match')
      .dropTable('match_detail')
      .dropTable('question')
      .dropTable('users')
  };