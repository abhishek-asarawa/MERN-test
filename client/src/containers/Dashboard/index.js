import React, { Fragment } from "react";
import { DashBoard } from "../../components";
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


    render () {
        return (
            <Fragment>
            <DashBoard />
            <button 
                onClick={() => 
                    this.props.history.push("/calculator")}
                >Use Calculator
            </button>
            </Fragment>
        );
    };
};

export default React.memo(Dashboard);