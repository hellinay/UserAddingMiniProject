import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import UserList from "./components/NewUser/UserList";

function App() {
const [userList,setUserList]=useState([]);

function addUserHandler(uName,uAge) {
  setUserList((prevUserList)=>{
    return[...prevUserList, {name:uName,age: uAge, id:Math.random()}]
  }
  )
}



  return (
    <div>
      <NewUser onAddUser={addUserHandler} ></NewUser>
      <UserList user={userList}></UserList>    
      </div>
  );
}

export default App;
