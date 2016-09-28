import request from 'superagent'

const url = '/v1'

export default {
  getList (callback) {
    const getUrl = `${url}/list`
    request.get(getUrl)
    .end((err, res) => {
      if (err) {
        callback(err)
      } else {
        const todos = res.body.map(todo => {
          return {
            id: todo.id,
            text: todo.text,
            isComplete: todo.is_complete
          }
        })
        callback(null, todos)
      }
    })
  },

  add (todo, callback) {
    const addUrl = `${url}/add`
    request.post(addUrl)
      .send(todo)
      .end((err, res) => {
        if (err) {
          callback(err)
        } else {
          todo.id = res.body.newId
          callback(null, todo)
        }
      })
  },

  update (todo, callback) {
    const completeUrl = `${url}/update/${todo.id}`
    request.put(completeUrl)
      .send({id: todo.id, text: todo.text, isComplete: todo.isComplete})
      .end((err) => {
        if (err) {
          callback(err)
        } else {
          callback(null, todo)
        }
      })
  }
}
