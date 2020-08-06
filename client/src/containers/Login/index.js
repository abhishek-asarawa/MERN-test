import React, { Component } from "react";
import {LoginFrom} from "../../components";


class Login extends Component{

    state = {
        formData: {
            email: "",
            password: ""
        }
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.formData);
    };

    inputHandler = (e) => {
        const {name, value} = e.target;
        const { formData } = this.state;
        this.setState({
            formData: {...formData, [name]: value}
        });
    }

    render () {
        return (
            <LoginFrom 
            formData={this.state.formData}
            submitHandler={this.submitHandler}
            inputHandler={this.inputHandler}
            />

        )
    };
};


export default Login;