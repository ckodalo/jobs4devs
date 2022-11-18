
import { Routes, Route } from "react-router-dom";
import AllJobs from "./components/AllJobs";
import AddJobForm from "./components/AddJobForm";
// import NavBar from "./components/NavBar.js"
import Login from "./components/Login";
import UserActions from "./components/UserActions";

function App() {
  return (
    <div>
         
      <Routes>
        <Route path="/" element = {<AllJobs/>}> 
        </Route>
        <Route path = "/Login" element = {<Login/>}>
             
        </Route>
        <Route path="/UserActions" element = {<UserActions/>}>
        </Route>
       
      </Routes>
    </div>
  )
}

export default App