import React, {Fragment} from "react";

const DashBoard = (props) => {
    const {name, email, address, city} = props;

    return (
        <Fragment>
            <h3>Hello {name}</h3>
            <h1>Your Profile</h1>
            <ul>
                <li>Email ID {email}</li>
                <li>Address {address}</li>
                <li>City {city}</li>
            </ul>
        </Fragment>
    );
};

export default React.memo(DashBoard);