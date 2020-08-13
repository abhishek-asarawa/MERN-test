import React from "react";
import { DashBoard } from "../../components";
// import { httpRequest, WEB_URL } from "../../config"
// import { response } from "express";

class Dashboard extends React.Component {

    state = {
        name: "",
        email: "",
        address: "",
        city: ""
    }

    // componentDidMount(){
    //     const reponse = httpRequest({
    //         path: "/users/profile",
    //         method: "GET",
    //     });
    //     console.log(response);
    // }


    render () {
        return (
            <DashBoard />
        );
    };
};

export default Dashboard;