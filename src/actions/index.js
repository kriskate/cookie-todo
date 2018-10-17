import * as types from '../constants/ActionTypes'

export const addTodo = text => ({ type: types.ADD_TODO, text })
export const completeTodo = id => ({ type: types.COMPLETE_TODO, id })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})

export const reset = () => ({ type: types.RESET })
