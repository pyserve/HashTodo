import { combineReducers } from "redux";
import { TodoReducer } from "./todoReducer";

const reducers = combineReducers({
    todo: TodoReducer
});

export default reducers;