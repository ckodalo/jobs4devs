
import Job from "./Job";
import { useState, useEffect } from "react";
//import Header from "./Header";
//import Search from "./Search";
import NavBar from "./NavBar";
import SearchTool from "./SearchTool";
import PostEditor from "./PostEditor";

function JobController({user}) {
  const [jobs, setJobs] = useState([]);

  console.log(user)

  useEffect(() => {
    
    fetch('/jobs')
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

    
    <div>
    
    <SearchTool />
    
      {/* <div className="card-container"> */}
      {jobs.map((job) => (
        <div key={job.id} className={"card"}>
           {/* <hr className={"line"}/> */}
          <div>
          <div className = "job-title">
            <a href = {job.location}>{job.title}</a></div>
          {/* <div>
           <span className="skills" >{job.stack}</span>
          </div> */}
        </div>
        
        <div>
          <div className="recruiter">
        <span>{job.recruiter}</span>
        </div>
        </div>
        </div>
       
      ))}
      </div>

{/*       
    </div> */}
    {/* <div className="footer">
      <p>ikoKazi 2022</p>
    </div> */}
    </div>
  
    
   
  );
}

export default JobController;

