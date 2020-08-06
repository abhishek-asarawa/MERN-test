import React, { Component } from "react";
import { SigninForm } from "../../components";


class Signin extends Component{

    state = {
        formData: {
            email: "",
            password: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        }
    };


    inputHandler = (e) => {
        const {name, value} = e.target;
        const { formData } = this.state;

        this.setState({
            formData: {...formData, [name]: value}
        });
    };


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.formData);
    };

    render() {
        return (
            <SigninForm 
            formData={this.state.formData}
            inputHandler={this.inputHandler}
            submitHandler= {this.submitHandler}
            />
        )
    };
};


export default Signin;