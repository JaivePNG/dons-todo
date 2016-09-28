exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todos').del()
    .then(function () {
      return Promise.all([
        knex('todos').insert({text: 'Write some sweet code', is_complete: false}),
        knex('todos').insert({text: 'Buy groceries', is_complete: false}),
        knex('todos').insert({text: 'Sleep', is_complete: false})
      ])
    })
}
