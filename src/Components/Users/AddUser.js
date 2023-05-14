import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/button";
import "./AddUser.css";
import ErrorModal from "../UI/ErrorModal";

const Adduser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError]=useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({title: 'Invalid Input', message: 'Filling All fields are mandatory.'});
      return;
    }
    if (+enteredAge < 1) {
        setError({title: 'Invalid Age', message: 'please enter a valid Age (>0)'});
      // This + sighn is for making the string to number
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };
  const addUserNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };
  const addAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const confirmHandler=()=>{
    setError(null)
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmHandler}/>}
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          type="text"
          value={enteredUserName}
          onChange={addUserNameHandler}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          id="age"
          type="number"
          value={enteredAge}
          onChange={addAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default Adduser;
