import './App.css';
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DashPage from "./pages/DashPage/DashPage";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


function App() {

    // optional configuration
    const options = {
        // you can also just use 'bottom center'
        position: positions.BOTTOM_CENTER,
        width: 'auto',
        timeout: 5000,
        offset: '30px',
        // you can also just use 'scale'
        transition: transitions.SCALE
    }

    return (
        <div className="App">
            <AlertProvider template={AlertTemplate} {...options}>
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
            </AlertProvider>
        </div>

    );
}

export default App;
