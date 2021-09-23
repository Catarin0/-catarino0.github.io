import React, {FC, useEffect, useState} from 'react';
import {TextField, Typography} from "@mui/material";
import './NumberGuesser.css'

const NumberGuesser: FC = () => {

    const [input, setInput] = useState(0);
    const [randomValue] = useState(Math.floor(Math.random() * (100 - 1 + 1) + 1));
    const [state, setState] = useState("");
    const [tries,setTries] = useState(0)

    const handle = (e) => {
        setInput(
            parseInt(e.target.value)
        );
    }

    useEffect(() => {

            console.log(randomValue)
            if (randomValue === input) {
                setTries(tries+ 1)
                setState("equal")
            } else if (randomValue > input) {
                setState("greater")
                setTries(tries+ 1)
            } else if (randomValue < input) {
                setState("lower")
                setTries(tries+1)
            }

            if (!input) {
                setState("none")
            }
        }
        , [input])


    const print = (value) => {
        switch (value) {
            case "greater" :
                return <Typography variant="h5">The number is greater then {input} !</Typography>
            case "lower" :
                return <Typography variant="h5">The number is lower then {input} !</Typography>
            case "equal" :
                return <Typography variant="h5">Good Job, the number was {randomValue} and it took you {tries} attempt(s)!</Typography>
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