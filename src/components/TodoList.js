import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import { types, getIDX } from '../reducers/todos';

const UL = ({ type, filteredTodos, actions }) => (
  <div>
    <div className="view-type">
      {type}
    </div>
    <ul className="todo-list">
      {filteredTodos.map(todo => todo.type !== type ? null :
        <TodoItem key={getIDX(todo)} todo={todo} {...actions} />
      )}
    </ul>
  </div>
)
const TodoList = ({ filteredTodos, actions }) => (
  <div>
    <UL type={types.EASY} filteredTodos={filteredTodos} actions={actions} />
    <UL type={types.ADVANCED} filteredTodos={filteredTodos} actions={actions} />
    <UL type={types.SUPERADVANCED} filteredTodos={filteredTodos} actions={actions} />
  </div>
)

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default TodoList
