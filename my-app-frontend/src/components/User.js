// import React from 'react'
// import Job from './Job'
// import { useEffect, useState} from 'react'
// import Header from './Header'

// function User({userData}) {
     
//     const [jobs, setJobs] = useState([])
    
//     //  useEffect(() => {
    
//         fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${userData.id}`)
//         .then(response => response.json())
//         .then(data => setJobs(data)) 
//         //  }, []) 

//   return     <div>
//        <div className="header">
//         <Header/>
//       </div>
      
//       <Job jobs={jobs}/>
  
    
//     <div className="footer"></div>
//     </div>
  
// }

// export default User






// import React, { useState } from "react";

// function User(){

//     const [newTitle, setTitle] = useState('');
//     const [newRecruiter, setRecruiter] = useState('');
//     const [newLocation, setLocation] = useState('');
//     const [newStack, setStack] = useState('')

//     function handlePost(e){
//      
//       alert("Your Post will Reflect on the JOBS Section")
//       fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           "title" : `${newTitle}`,
//           "location": `${newLocation}`,
//           "recruiter": `${newRecruiter}`,
//           "stack": `${newStack}`
//         }),
//       })

//       setTitle('');
//       setRecruiter('');
//       setLocation('');
//     }

//     return(
//     <div>
//       <form>
//         <div>
//           <input type="text" name="job-title" onChange={(e) => setTitle(e.target.value)} />
//           <input type="url" name="URL" placeholder="Enter url"  onChange={(e) => setRecruiter(e.target.value)}/>
//           <input type="text" name="recruiter" onChange={(e) => setLocation(e.target.value)} />
//           <input type="skills" name="skills"  onChange={(e) => setStack(e.target.value)}/>
//         </div>
//         <button type="submit" onClick={handlePost}>
//             Add a Job
//         </button>
//       </form>
//     </div>
         
//     )
// }

//  export default User;