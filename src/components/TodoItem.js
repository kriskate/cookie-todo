import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { getIDX } from '../reducers/todos';

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  render() {
    const { todo, completeTodo } = this.props

    let element = (
      <div className="view">
        <input className="toggle"
                type="checkbox"
                checked={todo.completed}
                onChange={() => completeTodo(getIDX(todo))} />
        <label>
          {todo.text}
        </label>
      </div>
    )

    return (
      <li className={classnames({
        completed: todo.completed,
      })}>
        {element}
      </li>
    )
  }
}
