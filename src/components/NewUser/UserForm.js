import { logRoles } from "@testing-library/react";
import React, { useState } from "react";
import "./UserForm.css";
import ErrorModalComp from "./ErrorModal";

function UserForm(params) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  function addFormHandler(event) {
    console.log(enteredName, enteredAge);
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0)
      setError({
        title: "Invalid input",
        msg: "Do not leave blank spaces",
      });
    if (enteredAge < 1)
      setError({
        title: "Invalid age",
        msg: "Age should be > 0",
      });

    const UserData = {
      name: enteredName,
      age: enteredAge,
    };

    params.onSaveUserData(UserData);
    //console.log(ExpenseData)
    setEnteredAge("");
    setEnteredName("");
  }

  function errorHandler(params) {
    setError(null)
  }

  console.log(enteredAge, enteredName);
  return (
    <div>
      { error && <ErrorModalComp title={error.title} msg={error.msg} onConfirm={errorHandler}/>}
      <form>
        <div>
          <div>
            <label>Username</label>
          </div>
          <div>
            <input
              id="name"
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label>Age</label>
            <div>
              <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              ></input>
            </div>
          </div>
          <button onClick={addFormHandler}>Add User </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
