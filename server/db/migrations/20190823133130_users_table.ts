exports.up = function(knex) {
  // Create a table
  knex.schema
    .createTable('users', function(table) {
      table.increments('id');
      table.string('name');
    })
    .catch(function(e: Error) {
      console.error(e);
    });
};

exports.down = function(knex) {
  knex.schema.dropTableIfExists('users');
};
