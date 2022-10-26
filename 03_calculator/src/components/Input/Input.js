import React, {useState} from "react";
import './Input.css'

const Input = props =>{
    const [enteredNumber, setEnteredNumber] = useState("Enter")

    const addEnteredNumber = (num)=>{
        setEnteredNumber(function(prevNumber){
            return [...prevNumber, num]
        })

        console.log(enteredNumber)
    }

    return (
        <div className="input-container">
            <h2 className="input" onEnteredNumber={addEnteredNumber}>{enteredNumber}</h2>
        </div>
    )
}

export default Input;