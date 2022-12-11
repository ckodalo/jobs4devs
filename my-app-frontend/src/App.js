
import React, {useState} from "react";
import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import JobController from "./components/JobController";
import AddJobForm from "./components/AddJobForm";
import NavBar from "./components/NavBar.js"
import Login from "./components/Login";
import User from "./components/UserActions";
import UserActions from "./components/UserActions";

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <>
    <main>
       <NavBar user={user} setUser={setUser} />  
      <Routes>
        <Route path="/" element = {<JobController/>}> 
        </Route>
      </Routes>
      {user ? (
        <Routes>
        <Route path="/UserActions" element = {<UserActions/>}>
        </Route>
        </Routes>
      ) : (
        <Routes>
        <Route path="/Login" element = {<Login setUser={setUser}/>}>   
        </Route>
      
      <Route path="/User" element = {<User/>}>
      </Route>
      </Routes>
      )}
    </main>
    </>
  )
}

export default App