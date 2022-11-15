
import { Routes, Route } from "react-router-dom";
import JobController from "./components/JobController";
import AddJobForm from "./components/AddJobForm";
// import NavBar from "./components/NavBar.js"
import Login from "./components/Login";
import User from "./components/User";

function App() {
  return (
    <div>
         
      <Routes>
        <Route path="/" element = {<JobController/>}> 
        </Route>
        <Route path="/AddJob" element = {<AddJobForm/>}>
        </Route>
        <Route path="/Login" element = {<Login/>}>   
        </Route>
      
      <Route path="/User" element = {<User/>}>
      </Route>
      </Routes>
    </div>
  )
}

export default App