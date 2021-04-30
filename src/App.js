import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home";
import Poets from "./components/Poets";

const Loader = () => (
    <div>
        Loading
    </div>
);

function App() {
    return (
        <Suspense fallback={<Loader/>}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/poets" component={Poets} />
                </Switch>
            </Router>
        </Suspense>
    );
}

export default App;