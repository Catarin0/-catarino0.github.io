import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DashPage from "./pages/DashPage/DashPage";


function App() {

    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/dash">
                            <DashPage/>
                        </Route>
                        <Route path="/*">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>

    );
}

export default App;
