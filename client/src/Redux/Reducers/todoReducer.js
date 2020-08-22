import { map } from "lodash";

const STATUS = {
    pending: 0,
    complete: 1,
    discard: -1
};


export const CREATE_TODO = "create_todo";
export const UPDATE_TODO = "update_todo";
export const DELETE_TODO = "delete_todo";


const initialTodo = {
    title: "",
    id: Date(),
    status: STATUS.pending
};


const initialTodoList = [];


const reducer = (state = initialTodoList, action) => {
    switch (action.type) {
        case CREATE_TODO:
            return [...state, {...initialTodo, title: action.payload, id: Date()}];

        case UPDATE_TODO:
            const updatedState = map(state, (todo) => {
                if (todo.id === action.payload.id)
                    return {...todo, title: action.payload.title}
                return todo;
            });
            return updatedState;

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload);
    
        default:
            return state;
    }
};


export default reducer;