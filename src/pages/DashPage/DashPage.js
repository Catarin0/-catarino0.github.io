import React, {FC, useState} from 'react';
import './DashPage.css'
import {push as Menu} from 'react-burger-menu'
import {Button} from "@mui/material";
import {useHistory} from "react-router";
import NumberGuesser from "../../core/components/NumberGuesser";

const DashPage: FC = () => {

    const [guessGame, setGuessGame] = useState(false);

    const history = useHistory();

    const routeChange = () => {
        let path = "/";
        history.push(path);
    }

    const handleExit = () => {
        routeChange()
    }


    return (
        <div className="dash">
            <Menu>
                <div className="button_spacer">
                    <Button variant="contained">CV</Button>
                </div>
                <div className="button_spacer">
                    <Button variant="contained" onClick={() => setGuessGame(true)}>Games</Button>
                </div>
                <div className="button_spacer">
                    <Button variant="contained" onClick={handleExit}>Exit</Button>
                </div>
            </Menu>
            {guessGame && <NumberGuesser/>}
        </div>

    );
}

export default DashPage