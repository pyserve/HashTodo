import * as actionTypes from '../actions/actionTypes';

export function TodoReducer(state=[],action){
    switch(action.type){
        case actionTypes.ADD_TODO:
            return([
                ...state, action.payload
            ])
        case actionTypes.DELETE_TODO:
        	return state.filter(item => item.id != action.payload)
        case actionTypes.TOGGLE_TODO:
        	const item = state.filter(item => item.id == action.payload)[0]
        	const todos = state.filter(item => item.id != action.payload)
        	const newItem = {
        		...item, completed: !item.completed
        	}
        	todos.push(newItem);
        	return todos
        case actionTypes.EDIT_TODO:
            const edititem = state.filter(item => item.id == action.payload.id)[0]
            const editedtodos = state.filter(item => item.id != action.payload.id)
            const editedItem = {
                ...edititem,
                title: action.payload.title,
                priority: action.payload.priority
            }
            editedtodos.push(editedItem)
            return editedtodos
        default:
            return state
    }
}