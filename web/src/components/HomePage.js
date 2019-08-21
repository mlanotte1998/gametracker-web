import React from "react";

import { MDBContainer, MDBJumbotron } from "mdbreact";
import { Column, Row } from "simple-flexbox";

export default class HomePage extends React.Component {
    render() {
        return (
            <MDBContainer className="text-center" fluid>
                <MDBJumbotron fluid>
                    <MDBContainer fluid>
                        <h2 className="display-4">Welcome</h2>
                        <p className="lead">
                            This is a modified jumbotron that occupies the entire horizontal space
                            of its parent.
                        </p>
                    </MDBContainer>
                </MDBJumbotron>
            </MDBContainer>
        );
    }
}
