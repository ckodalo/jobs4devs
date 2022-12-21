
import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
import JobController from "./components/JobController";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import UserActions from "./components/UserActions";

function App() {
  const [user, setUser] = useState(null)
  console.log(user)


  
     useEffect(() => {
         fetch("http://127.0.0.1:3000/me").then((response) => {
           if (response.ok) {
             response.json().then((user) => setUser(user));
           }
         });
       }, []);
  return (
    <>
    <main>
      <div className="header">
       <NavBar  user={user} setUser={setUser} />  
       </div>
      <Routes>
        <Route path="/" element = {<JobController user={user}/>}> 
        </Route>
    </Routes> 
      
       {/* {user ? ( */}
       <Routes>
        <Route path="/UserActions" element = {<UserActions user={user}  setUser={setUser}/>}>
        </Route>
        </Routes>
      
      {/* ) : (  */}
      <Routes> 
        <Route path="/Login" element = {<Login user={user} setUser={setUser}/>}>   
        </Route>
      </Routes>
      {/* )} */}
      
    </main>
    </>
  )
}

export default App