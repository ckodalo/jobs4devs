import React, { useEffect, useState } from "react";


function Job( {jobs}) {
  console.log(jobs)
  return (
    <div className="jobs">
      {jobs.map((job) => (
        <div key={job.id} className={"job-container job-container--borderleft"}>
          <div className="part1">
          <div class = "position">
            <a href = {job.location}>{job.title}</a></div>
          <div className="company">
          <span className = "cname">{job.recruiter}</span>
          </div>
        </div>
        
        <div className="part2">
        <span class = "details">{job.stack}</span>
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
