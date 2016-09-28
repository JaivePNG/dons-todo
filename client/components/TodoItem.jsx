import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='todo-item'>
        <span className={this.props.isComplete ? 'complete' : ''}>
          {this.props.text}
        </span>{' '}
        <a href='#' onClick={this.props.complete}>
          {this.props.isComplete ? 'undo' : 'complete'}
        </a>
      </div>
    )
  }
})


