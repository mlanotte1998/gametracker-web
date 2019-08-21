import React from "react";
import { Row, Column } from "simple-flexbox";
import { MDBContainer, MDBJumbotron } from "mdbreact";

import DataTable from "./DataTable";
import GamesTable from "./GamesTable";

export default class LatestGamesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer fluid>
                <MDBJumbotron fluid>
                    <MDBContainer fluid>
                        <h2 className="display-4">Fluid jumbotron</h2>
                        <p className="lead">
                            This is a modified jumbotron that occupies the entire horizontal space
                            of its parent.
                        </p>
                    </MDBContainer>
                </MDBJumbotron>
                <Row>
                    <Column style={{ flex: 1 }}>Hello</Column>
                    <Column style={{ flex: 2, margin: "20px 30px 20px 20px " }}>
                        <DataTable />
                    </Column>
                </Row>
            </MDBContainer>
        );
    }
}
