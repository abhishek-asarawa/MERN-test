import React, { Fragment } from "react";
import Modal from "react-modal";
import { Button, Input } from "reactstrap";
import { connect } from "react-redux";
import { UPDATE_TODO, DELETE_TODO } from "../../Redux/Reducers/todoReducer";



Modal.setAppElement('#root');


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };


class TodoModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            newTitle: "" || props.todo.title
        };
    }

    modalAction = {
        open: () => {
            this.setState({
                isOpen: true
            })
        },
        close: () => {
            this.setState({
                isOpen: false
            });
        }
    };

    handlers = {
        input: (e) => {
            this.setState({
                [e.target.name]: e.target.value
            });
        },
        update: (e) => {
            e.preventDefault();
            this.props.updateTodo({
                ...this.props.todo, 
                title: this.state.newTitle
            });
            this.modalAction.close();
        },
        delete: (e) => {
            e.preventDefault();
            this.props.deleteTodo(this.props.todo.id)
            this.modalAction.close();
        }
    }

    render(){
        const { todo, uniqueKey } = this.props;
        return(
            <Fragment>
                <h4 onClick={this.modalAction.open} >{todo.title}</h4>
                <Modal 
                    key={uniqueKey}
                    isOpen={this.state.isOpen}
                    shouldReturnFocusAfterClose={false}
                    onRequestClose={this.modalAction.close}
                    style={customStyles}
                    >
                    <Input 
                        type="text" 
                        name="newTitle" 
                        value={this.state.newTitle}
                        onChange={this.handlers.input}
                    />
                    <p>STATUS - {todo.status}</p>
                    <div>
                        <Button type="submit" onClick={this.handlers.update}>Save Changes</Button>
                        <p></p>
                        <Button type="submit" onClick={this.handlers.delete}>Delete</Button>
                        <p></p>
                        <Button onClick={this.modalAction.close}>Close</Button>
                    </div>
                </Modal>
            </Fragment>
        )
    }
}


const mapDispatchToProp = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch({
            type: DELETE_TODO,
            payload: id
        }),
        updateTodo: (updates) => dispatch({
            type: UPDATE_TODO,
            payload: updates
        })
    };
};


export default React.memo(connect(null, mapDispatchToProp)(TodoModal));