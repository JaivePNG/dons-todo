import React from 'react'

import TodoItem from './TodoItem'

export default React.createClass({
  render () {
    return (
      <div className="todo-list">
        {this.props.todos.map((todoItem) => {
          return <TodoItem
            id={todoItem.id}
            key={todoItem.id}
            text={todoItem.text}
            complete={() => this.complete(todoItem)}
            isComplete={todoItem.isComplete} />
        })}
      </div>
    )
  },

  complete (todoItem) {
    this.props.complete(todoItem, this.updateTodoList)
  },

  updateTodoList (err) {
    const updatedTodos = this.props.todos.map((todo) => {

    })
    this.setState(updatedTodos)
  }
})

