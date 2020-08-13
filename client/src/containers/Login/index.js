import React, { Component } from "react";
import {LoginFrom} from "../../components";
import { httpRequest } from "../../config";
// import { Redirect } from "react-router-dom";


class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            formData: {
                email: "",
                password: ""
            },
            error: ""
        };
    }


    submitHandler = async (e) => {
        e.preventDefault();
        // console.log(this.state.formData);

        const options = {
            data: this.state.formData,
            method: "POST",
            url: "/users/login"
        };

        try {
            const response = await httpRequest(options);
            // console.log("token==>",response.data.data.token)
            localStorage.setItem("access_token", response.data.data.token);
            this.props.history.push("/dashboard");  //history is default props in class component      
        } catch(err) {
            console.log(err);
            if (!!err.response.data.error)
                this.setState({
                    error: err.response.data.error
                });
        }
    };

    inputHandler = (e) => {
        const {name, value} = e.target;
        const { formData } = this.state;
        this.setState({
            formData: {...formData, [name]: value},
            error: ""
        });
    }

    render () {
        return (
            <LoginFrom 
            formData={this.state.formData}
            error={this.state.error}
            submitHandler={this.submitHandler}
            inputHandler={this.inputHandler}
            />

        )
    };
};


export default Login;