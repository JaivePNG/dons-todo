var config = require('../knexfile').development
var db = require('knex')(config)

module.exports = {
  getList: function () {
    return db('todos').select()
  },
  add: function (todo) {
    return db('todos').insert({
      text: todo.text,
      is_complete: todo.isComplete
    })
  },
  update: function (todo) {
    return db('todos').update({
      is_complete: todo.isComplete
    })
    .where('id', '=', todo.id)
  }
}
