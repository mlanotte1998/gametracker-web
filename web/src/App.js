import React from "react";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import GamesTable from "./components/GamesTable";
import LatestGamesPage from "./components/LatestGamesPage";
import PersonalPage from "./components/PersonalPage"
import HomePage from "./components/HomePage";
import DataTable from "./components/DataTable";

export default class App extends React.Component {
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
