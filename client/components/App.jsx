import React from 'react'

import Header from './Header'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import todoApi from '../todo-api'

export default React.createClass({
  getInitialState () {
    return {todos: []}
  },

  componentDidMount () {
    todoApi.getList((err, list) => {
      if (!err) {
        this.setState({todos: list})
      }
    })
  },

  render() {
    return (
      <div>
        <Header />
        <div>
          <AddTodo add={this.addTodo} />
        </div>
        <div>
          <TodoList
            todos={this.state.todos}
            complete={this.completeTodo} />
        </div>
      </div>
    )
  },

  completeTodo (todo) {
    todo.isComplete = !todo.isComplete
    todoApi.update(todo, (err, updatedTodo) => {
      if (!err) {
        const todos = this.state.todos.filter((item) => {
          return todo.id !== item.id
        })
        this.setState([...todos, updatedTodo])
      }
    })
  },

  addTodo (todoText) {
    const todo = {
      text: todoText,
      isComplete: false
    }
    todoApi.add(todo, (err, newTodo) => {
      if (!err) {
        const newState = {
          todos: [...this.state.todos, newTodo]
        }
        this.setState(newState)
      }
    })
  }
})
