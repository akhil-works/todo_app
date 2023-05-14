import React, {useState} from 'react';
import Adduser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {
const [usersList, setUserslist]=useState([]);

const addUserHandler=((uName, uAge)=>{
  setUserslist((prevUsersList)=>{
    return[...prevUsersList, {name:uName, age:uAge, id: Math.random().toString()}]
  })
})

  return (
    <div >
      <Adduser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
