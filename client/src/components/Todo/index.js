import React, { Fragment } from "react";
import { Input, Button } from "reactstrap";
import { map } from "lodash";
import TodoModal from "../Modal";
import "./index.css";


const TodoList = (props) => {
    const { todoList, handlers, modalAction, data } = props;

    return (
        <Fragment>
            <h2 style={{textAlign: "center"}}>Todo List</h2>
            <hr/>
            <Input type="text" name="title" onChange={handlers.input} value={data.title} placeholder="Title of Todo"/>
            <br/>
            <Button onClick={handlers.submit} disabled={!data.title}>Create Todo</Button>
            <hr/>
            <ul className="list-group list-group-flush">{
                map(todoList, (todo, idx) => (
                    <li className="list-group-item d-flex justify-content-center" key={idx}>
                        <TodoModal
                            key={idx}
                            uniqueKey={idx}
                            todo={todo}
                            modalAction={modalAction}
                            modalTitle={data.modalTitle}
                            isOpen={data.modalIsOpen}
                            handlers={handlers}
                        />
                    </li>
                ))
            }
            </ul>
        </Fragment>
    )
};

export default React.memo(TodoList);