import React, { Component } from "react";
import { SigninForm } from "../../components";
import { httpRequest } from "../../config";

class Signin extends Component{

    state = {
        formData: {
            email: "",
            password: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        },
        error: ""
    };


    inputHandler = (e) => {
        const {name, value} = e.target;
        const { formData } = this.state;

        this.setState({
            error: "",
            formData: {...formData, [name]: value}
        });
    };


    submitHandler = async (e) => {
        e.preventDefault();
        // console.log(this.state.formData);
        const {formData: data} = this.state;
        try {
            const user = await httpRequest({
                data,
                url: "/users/signin",
                method: "POST"
            });
            console.log(user.data.data);
        } catch(err) {
            console.dir(err);
            this.setState({
                error: err.response.data.error
            });
        };
    };

    render() {
        return (
            <SigninForm 
            formData={this.state.formData}
            inputHandler={this.inputHandler}
            submitHandler= {this.submitHandler}
            error={this.state.error}
            />
        );
    };
};


export default React.memo(Signin);