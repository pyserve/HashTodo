import * as actionTypes from './actionTypes';

export const addTodo = (data) => {
    return({
        type: actionTypes.ADD_TODO,
        payload: data,
    })
}

export const deleteTodo = (itemId) => {
	return({
		type: actionTypes.DELETE_TODO,
		payload: itemId
	})
}

export const toggleTodo = (itemId) => {
	return({
		type: actionTypes.TOGGLE_TODO,
		payload: itemId
	})
}

export const editTodo = (data) => {
	return({
		type: actionTypes.EDIT_TODO,
		payload: data
	})
}