import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import GamesTable from "./GamesTable";
import LatestGamesPage from "./LatestGamesPage";
import PersonalPage from "./PersonalPage"
import HomePage from "./HomePage";
import DataTable from "./DataTable";

export default class GameTracker extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <NavBar />
                </div>
                <Switch>
                    <Route path="/latest">
                        <LatestGamesPage />
                    </Route>
                    <Route path="/personal">
                        <PersonalPage/>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </Router>
        );
    }
}
