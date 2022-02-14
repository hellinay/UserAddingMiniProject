import React, {useState} from "react";
import UserForm from "./UserForm";
import "./UserForm.css";
import Card from "../UI/Card";


function NewUser(params) {
  function saveNewUserHandler(enteredUserData) {

    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };

    if(userData.name && userData.age !=null){
    params.onAddUser(userData.name, userData.age);
    }
    console.log(userData, "newuser");
  }

  return (
    <div>
      <UserForm onSaveUserData={saveNewUserHandler}></UserForm>
    </div>
  );
}

export default NewUser;
