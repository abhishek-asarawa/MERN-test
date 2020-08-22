import React, { Fragment } from "react";
import Modal from "react-modal";
import { Button } from "reactstrap";


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

    state = {
        modalIsOpen: false,
        setModalIsOpen: false
    };


    openModal = () => {
        this.setState({
            modalIsOpen: true
        });
    };


    closeModal = () => {
        this.setState({
            modalIsOpen: false
        });
    };

    render(){
        return (
            <Fragment>
                <Button onClick={this.openModal}>Open Modal</Button>
                <Modal 
                    isOpen={this.state.modalIsOpen} 
                    shouldReturnFocusAfterClose={false}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    >
                    <h2>Modal Title</h2>
                    <p>Modal body</p>
                    <div>
                        <Button onClick={this.closeModal}>Close</Button>
                    </div>
                </Modal>
            </Fragment>
        )
    }
};


export default TodoModal;