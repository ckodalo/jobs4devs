
import Job from "./Job";
import { useState, useEffect } from "react";
//import Header from "./Header";
//import Search from "./Search";
import NavBar from "./NavBar";


function JobController({user}) {
  const [jobs, setJobs] = useState([]);

  console.log(user)

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
    <div id ="body">

      
      {/* <Job jobs={jobs} setJobs = {setJobs}/> */}

   
    {/* <div className="header-container">
        <Header/>
      </div> */}
    <div>
      {jobs.map((job) => (
        <div key={job.id} className={"job-container"}>
           {/* <hr className={"line"}/> */}
          <div className="part1">
          <div className = "position">
            <a href = {job.location}>{job.title}</a></div>
          <div>
           <span className="details" >{job.stack}</span>
          </div>
        </div>
        
        <div className="part2">
          <div className="details">
        <span>{job.recruiter}</span>
        </div>
        </div>
        </div>
       
      ))}
      
    </div>
    <div className="footer">
      <p>ikoKazi 2022</p>
    </div>
    </div>
  
    
   
  );
}

export default JobController;

