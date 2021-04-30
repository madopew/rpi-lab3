import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Poets from "./components/Poets";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/poets" component={Poets} />
            </Switch>
        </Router>
    );
}

export default App;