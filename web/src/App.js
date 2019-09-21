import React from "react";

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import GameTracker from "./components/GameTracker";

export default class App extends React.Component {
    render() {
        return <GameTracker />;
    }
}
