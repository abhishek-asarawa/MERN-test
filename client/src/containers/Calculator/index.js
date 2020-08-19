import React from "react";
import { CalculatorCompo } from "../../components";


class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value1: 0,
            value2: 0,
            result: [],
            error: false
        };
    };

    inputHandler = (e) => {
        const { name, value } = e.target;
        if (isNaN(value)) {
            this.setState({
                error: true
            });
        } else {
            this.setState({ 
                error: false
            });
        }
        this.setState({
            [name]: value
        });
    };


    addition = () => {
        if(this.state.result.length === 10) this.state.result.pop();
        this.setState({
            result: [
                {   
                    value1: this.state.value1,
                    value2: this.state.value2,
                    method: "+",
                    result: parseFloat(this.state.value1) + parseFloat(this.state.value2)
                }, 
                ...this.state.result
            ]
        });
    };

    substraction = () => {
        if(this.state.result.length === 10) this.state.result.pop();
        this.setState({
            result: [
                {   
                    value1: this.state.value1,
                    value2: this.state.value2,
                    method: "-",
                    result: parseFloat(this.state.value1) - parseFloat(this.state.value2)
                }, 
                ...this.state.result
            ]
        });
    };


    multiply = () => {
        if(this.state.result.length === 10) this.state.result.pop();
        this.setState({
            result: [
                {   
                    value1: this.state.value1,
                    value2: this.state.value2,
                    method: "x",
                    result: parseFloat(this.state.value1) * parseFloat(this.state.value2)
                }, 
                ...this.state.result
            ]
        });
    };


    divide = () => {
        if(this.state.result.length === 10) this.state.result.pop();
        this.setState({
            result: [
                {   
                    value1: this.state.value1,
                    value2: this.state.value2,
                    method: "/",
                    result: parseFloat(this.state.value1) / parseFloat(this.state.value2)
                }, 
                ...this.state.result
            ]
        });
    };


    render () {
        return (
            <CalculatorCompo 
                inputHandler={this.inputHandler} 
                value1 = {this.state.value1} 
                value2 = {this.state.value2}
                result = {this.state.result}
                error = {this.state.error}
                add = {this.addition}
                sub = {this.substraction}
                mul = {this.multiply}
                div = {this.divide}
                />
        );
    };
};


export default React.memo(Calculator);