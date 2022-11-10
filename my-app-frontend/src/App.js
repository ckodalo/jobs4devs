
//import data from "./data.json";
import Job from "./components/Job";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    
    fetch('https://obscure-springs-19515.herokuapp.com/jobs')
    .then(response => response.json())
    .then(data => setJobs(data)) 
    }, []) 


  return (
    <div>
      <div className="header">JOBS 4 DEVS</div>
      <Job jobs={jobs}/>
    <div className="footer"></div>
    </div>
  );
}

export default App;