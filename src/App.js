import './App.css';
import {Button, TextField} from "@mui/material";

function App() {
    return (
        <div className="App">
            <h1>Catzlandia</h1>
            <div className="spaceButtonLogin">
            <TextField
                id="outlined-name"
                label="Username"
            />
            </div>
            <div className="spaceButtonLogin">
            <TextField
                id="outlined-password-input"
                label="Password"
                type="Password"
                autoComplete="current-password"
            />
            </div>
            <div className="spaceButtonLogin">
                <Button variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </div>

    );
}

export default App;
