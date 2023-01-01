import React, {useState} from "react";
import AddUsers from "./components/Users/AddUsers";
import UsersList from "./components/Users/UsersList";
import RenderList from "../../06-todo-app/src/components/RenderList/RenderList";

function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsersList)=>{
      return [...prevUsersList, {name:uName, age: uAge, id: Math.random().toString()}]
    })
  }

  return (
    <div className="App">
      <AddUsers onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
