import React from "react";
import { Row, Column } from "simple-flexbox";
import { MDBContainer, MDBJumbotron } from "mdbreact";

import "../styling/LatestGamesPage.css"

import DataTable from "./DataTable";
import FilterPanel from "./FilterPanel"
import GamesTable from "./GamesTable";

export default class LatestGamesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MDBContainer className="LatestGamesPage" fluid>
                <MDBJumbotron className="jumbotron" fluid>
                    <MDBContainer fluid>
                        <h2 className="display-4">Fluid jumbotron</h2>
                        <p className="lead">
                            This is a modified jumbotron that occupies the entire horizontal space
                            of its parent.
                        </p>
                    </MDBContainer>
                </MDBJumbotron>
                <Row>
                    <Column className="filterBorder" style={{ flex: 1 }}>
                        <FilterPanel/>
                    </Column>
                    <Column className="tableBorder" style={{ flex: 2}}>
                        <DataTable />
                    </Column>
                </Row>
            </MDBContainer>
        );
    }
}
