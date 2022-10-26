import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const [error, seterror] = useState();

    const onsubmitHandler = Event => {
        Event.preventDefault();

        setEnteredAge("");
        setEnteredUsername("");

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            seterror({
                title: "Invalid Input",
                message: "please enter a valid name and age(Non-empty values)."
            })
        }

        if(+(enteredAge < 1)){
            seterror({
                title: "Invalid Input",
                message: "Please enter a valid age (< 0)."
            })
        }

        else{
            props.onAddUser(enteredUsername, enteredAge);
        }
        
    }

    const usernameChangeHandler = (Event) => {
        setEnteredUsername(Event.target.value);
    }

    const ageChangeHandler = (Event) => {
        setEnteredAge(Event.target.value);
    }

    const errorHandler = () =>{
        seterror(null);
    }

    return (
        <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        
        <Card cssClass={classes.input}>
            <form onSubmit={onsubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" value={enteredUsername} id="username" onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age</label>
                <input type="text" value={enteredAge} id="age" onChange={ageChangeHandler}/>
                <Button type="submit">Add Users</Button>
            </form>
        </Card>
        </div>
    )
}

export default AddUsers;