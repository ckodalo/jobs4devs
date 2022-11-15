import React from "react";


function Job( {jobs, IsLoggedIn}) {

  //console.log(jobs)

  // function handleChange(e) {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   })

  // }

   function handleDelete(targetJob) {
     console.log("cllic")
     console.log(targetJob)
   
   //setJobs(jobs.filter(job => job !== targetJob))
  
 //useEffect (() => {
      fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${targetJob.id}`, {
        method: "DELETE",
        headers: {
         "content-type": "Application/JSON"
       },
       body: JSON.stringify(targetJob)
     })
     .then((res) => res.json())
     .then((data) => console.log(data))
   }
 // ), []}

  return (
    IsLoggedIn ?
    <div className="jobs">
      {jobs.map((job) => (
        <div key={job.id} className={"job-container"}>
          <div className="part1">
          <div class = "position">
            <a href = {job.location}>{job.title}</a></div>
          <div className="company">
          <span className = "cname">{job.recruiter}</span>
          </div>
        
          <button className="icon-box" onClick={() => {handleDelete(job)}} >delete</button>
        </div>
        
        <div className="part2">
        <span className= "details">{job.stack}</span>
        </div>
        </div>
      ))}
      
    </div>
    :
    <div className="jobs">
      {jobs.map((job) => (
        <div key={job.id} className={"job-container"}>
          <div className="part1">
          <div class = "position">
            <a href = {job.location}>{job.title}</a></div>
          <div className="company">
          <span className = "cname">{job.recruiter}</span>
          </div>
        </div>
        
        <div className="part2">
        <span className= "details">{job.stack}</span>
        </div>
        </div>
      ))}
      
    </div>
  )
}

export default Job

// const Job = (props) => {
//   const {
//     title,
//     recruiter, 
//     remote,
//     location,
//     user_id,
//     stack,
//     logo,
//     featured

//   } = props.data;

//   let keywords = [recruiter, stack];

//   const [icon, setIcon] = useState("");

//   const importSvgs = () => {
//     const logoSvg = import(`${logo}`).then((d) => {
//       setIcon(d.default);
//     });
//   };

//   useEffect(() => {
//     importSvgs();
//   }, [logo]);

//   return (
//     <div
//       className={
//         featured ? "job-container job-container--borderLeft" : "job-container"
//       }
//     >
//       <div className="logo">
//         <img src={icon} alt="" />
//       </div>
//       <div className="part1">
//         <div className="company">
//           <span className="cname">{recruiter}</span>
//         </div>

//         <div className="position">{title}</div>

//         <div className="details">
//           <span>{location}</span>
//         </div>
//       </div>

//       <div className="part2">
//         {keywords.map((key, id) => (
//           <span onClick={() => props.setkeywords(key)} key={id}>
//             {key}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Job;
