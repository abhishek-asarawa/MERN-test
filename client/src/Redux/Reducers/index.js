import { combineReducers } from "redux";
import TodoReducer from "./todoReducer";
import AuthReducer  from "./googleAuthReducer";

export default combineReducers({
    todos: TodoReducer,
    googleAuths: AuthReducer 
});