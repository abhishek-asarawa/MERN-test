import React from "react";
import { connect } from "react-redux";
import { TodoList } from "../../components";
import { CREATE_TODO } from "../../Redux/Reducers/todoReducer";

class Todo extends React.Component{

    state = {
        title: "",
    };


    handlers = {
        input: (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        },
        submit: (e) => {
            e.preventDefault();
            this.props.createTodo(this.state.title);
            this.setState({
                title: ''
            });
        },
        deleteTodo: (e) => {
            e.preventDefault();
            this.props.deleteTodo(e.target.id);
        }
    };

    render() {
        return (
            <TodoList 
                todoList={this.props.todoList}
                data={this.state}
                handlers={this.handlers}
            /> 
        );
    };
};


const mapStatetoProp = (state) => {
    return {
        todoList: state.todos
    };
};


const mapDispatchToProp = (dispatch) => {
    return {
        createTodo: (title) => dispatch({
            type: CREATE_TODO,
            payload: title
        })
    };
};


export default React.memo(connect(mapStatetoProp, mapDispatchToProp)(Todo));