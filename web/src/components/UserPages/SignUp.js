import React from "react";
import { MDBContainer } from "mdbreact";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return <MDBContainer />;
    }
}
