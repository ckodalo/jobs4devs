
import Job from "./Job";
import { useState, useEffect } from "react";
import Header from "./Header";


function JobController() {
  const [jobs, setJobs] = useState([]);

  

  useEffect(() => {
    
    fetch('https://obscure-springs-19515.herokuapp.com/jobs')
    .then(response => response.json())
    .then(data => setJobs(data)) 
    }, []) 

   
  //   function handleDelete(targetJob) {
  //     console.log("cllic")
  //     console.log(targetJob)
     
  //   setJobs(jobs.filter(job => job !== targetJob))
  
  //     // useEffect (() => {
  //       fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${targetJob.id}`, {
  //         method: "DELETE",
  //         headers: {
  //          "content-type": "Application/JSON"
  //        },
  //        body: JSON.stringify(targetJob)
  //      })
  //      .then((res) => res.json())
  //      .then((data) => console.log(data))
  //    }
  //  // ), []}

  return (
    <div>
      <div className="header">
        <Header/>
      </div>
      
      <Job jobs={jobs} setJobs = {setJobs}/>
  
    
    <div className="footer"></div>
    </div>
  );
}

export default JobController;