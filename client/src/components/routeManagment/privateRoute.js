import React from "react";
import { Route, Redirect } from "react-router-dom";

// checking for token
const isAuth = () => !!localStorage.getItem("access_token");

const PrivateRoute = (props) => {
    return (
        isAuth() ?
            <Route {...props} /> :
            <Redirect to={"/login"} />
    );
};


export default PrivateRoute;