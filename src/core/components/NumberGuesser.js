import React, {FC, useEffect, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import './NumberGuesser.css'

const NumberGuesser: FC = () => {

    const [input, setInput] = useState(0);
    const [randomValue, setRandomValue] = useState(Math.floor(Math.random() * (100 - 1 + 1) + 1));
    const [state, setState] = useState("");

    const handle = (e) => {
        setInput(
            parseInt(e.target.value)
        );
    }

    const delay = ms => new Promise(res => setTimeout(res, ms));

    useEffect(async () => {

            console.log(randomValue)

            if (randomValue === input) {
                setState("equal")
                await delay(5000)
                setRandomValue(Math.floor(Math.random() * (100 - 1 + 1) + 1))
            } else if (randomValue > input) {
                setState("greater")
            } else if (randomValue < input) {
                setState("lower")
            }

            if (!input) {
                setState("none")
            }
        }
        , [input, randomValue])


    const print = (value) => {

        switch (value) {
            case "greater" :
                return <Typography variant="h5">The number is greater then {input} !</Typography>
            case "lower" :
                return <Typography variant="h5">The number is lower then {input} !</Typography>
            case "equal" :
                return <Typography variant="h5">Good Job, the number was {randomValue} , new game starting in 5 seconds!</Typography>
            default:
                return;

        }
    }


    return (
        <div className="number-guesser">
            <Typography variant="h4" color="primary" marginBottom="30px" marginTop="60px">Guess the number between 1 and
                100!</Typography>
            <TextField type="number" value={input} onChange={handle}/>
            {print(state)}
        </div>
    );
}

export default NumberGuesser;