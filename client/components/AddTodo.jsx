import React from 'react'

let todoInput = null

export default React.createClass({
  render() {
    return (
      <div className="add-todo">
        <input
          id="new-todo"
          name="new-todo"
          placeholder="What would you like todo?"
          ref={function (input) {
            todoInput = input
          }} />
        <button id="add-todo"
          onClick={() => this.props.add(todoInput.value)}>Add</button>
      </div>
    )
  }
})
