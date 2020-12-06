import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Global from "./pages/Global";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";

const App = () => {
    return (
        <Router>
            <div>
                <h1>Covid Tracker</h1>
                <nav>
                    <ul>
                        <h1>
                        <li>
                            <Link to ="/Global">Global</Link>
                        </li>
                        <li>
                            <Link to ="/Indonesia">Indonesia</Link>
                        </li>
                        <li>
                            <Link to ="/Provinsi">Provinsi</Link>
                        </li>
                        </h1>
            <Switch>
                <Route path="/Global">
                    <Global />
                </Route>
                <Route path="/Indonesia">
                    <Indonesia />
                </Route>
                <Route path="/Provinsi">
                    <Provinsi />
                </Route>
            </Switch>
                    </ul>
                </nav>
            </div>
        </Router>
    );
};

export default App;