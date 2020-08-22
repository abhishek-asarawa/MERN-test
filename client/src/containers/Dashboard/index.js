import React, { Fragment } from "react";
import { DashBoard } from "../../components";
import { Button } from "reactstrap";
// import { httpRequest, WEB_URL } from "../../config"
// import { response } from "express";

class Dashboard extends React.Component {

    // componentDidMount(){
    //     const reponse = httpRequest({
    //         path: "/users/profile",
    //         method: "GET",
    //     });
    //     console.log(response);
    // }

    onClickSignOut = () => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.auth.signOut();
    }


    render () {
        return (
            <Fragment>
                <DashBoard />
                <button 
                    onClick={() => 
                        this.props.history.push("/calculator")}
                    >Use Calculator
                </button>
                <Button
                        onClick={() => 
                        this.props.history.push("/todo")
                    }>
                    Todo List
                </Button>
                <Button
                    onClick={this.onClickSignOut}   
                >
                    Sign Out
                </Button>
            </Fragment>
        );
    };
};

export default React.memo(Dashboard);