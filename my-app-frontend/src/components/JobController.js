
//import data from "./data.json";
import Job from "./Job";
import AddJobForm from "./AddJobForm";
import { useState, useEffect } from "react";
import Header from "./Header";
import Search from "./Search";
import NavBar from "./NavBar";

function JobController() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    
    fetch('https://obscure-springs-19515.herokuapp.com/jobs')
    .then(response => response.json())
    .then(data => setJobs(data)) 
    }, []) 


  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      
      <Job jobs={jobs}>
      </Job>
    
    <div className="footer"></div>
    </div>
  );
}

export default JobController;