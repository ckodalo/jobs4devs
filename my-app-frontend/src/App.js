
import { Routes, Route } from "react-router-dom";
import JobController from "./components/JobController";
import AddJobForm from "./components/AddJobForm";
import NavBar from "./components/NavBar.js"

function App() {
  return (
    <div>
         
      <Routes>
        <Route path="/" element = {<JobController/>}> 
        </Route>
        <Route path="/AddJob" element = {<AddJobForm/>}>
        </Route>
      </Routes>
    </div>
  )
}

export default App