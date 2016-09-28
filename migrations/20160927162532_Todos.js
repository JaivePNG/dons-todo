exports.up = function(knex, Promise) {
  return knex.schema.createTable('todos', function (table) {
    table.increments().primary()
    table.string('text')
    table.boolean('is_complete')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todos')
};
