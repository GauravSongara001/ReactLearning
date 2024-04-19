import { useState, useEffect } from "react";
// import Register from "./Register";
// import UserList from "./UserList";
import { RouterProvider } from 'react-router-dom'
import router from "../routes";

function App() {
  const [users, setusers] = useState([])

  const addUser = (user) => {
    user.id = users.length + 1;
    setusers([...users, user])
  }

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("users"))
    if (list) {
      setusers([...list])
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users))
  }, [users])

  

  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Register addUserHandler={addUser} />
      <UserList users={users} /> */}
    </div>
  );
}

export default App;
