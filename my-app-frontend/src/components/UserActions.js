import React from 'react'
import { useEffect, useState } from 'react'
// import User from './User'
import Header from './Header'
import NavBar from './NavBar'


function UserActions({user, setUser}) {

  // const [user_id, setUser_Id] = useState(null)
  const [userJobs, setUserJobs] = useState([])
 console.log(user)
  //fetch job(s) with a particular user id
   useEffect(() => {
    
     fetch("http://127.0.0.1:3000/jobs")
   
       .then(response => response.json())
       .then(data => setUserJobs(data))
   }, [])



//filter jobs by id 
    const filteredUserJobs = userJobs.filter(job => job.user_id == user.id)


  

console.log(filteredUserJobs)
  //form StateVar
  const [formData, setFormData] = useState([]);

  //stores input value into StateVar
  function handleChange(e) {

    // setUser_Id(userData.id)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      // "user_id": user_id
    })
   console.log(formData)
  }

  // POST FUNCTIONALITY

  //Post Jobs functionality
  function handlePostJob(e) {
    e.preventDefault();
//   userData.id === user_id ?  
    fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => setUserJobs({
        ...userJobs,
        data
      }))

      
    //   :
    //   alert("sorry, unrecognized name")
  }

   //DELETE FUNCTIONALITY
   function handleDelete(targetJob) {
     const modifiedJobs = userJobs.filter((job) => job !== targetJob) 

    // e.stopPropagation()
     console.log(targetJob)
    //e.preventDefault();
    fetch(`http://127.0.0.1:3000/jobs/${targetJob.id}`, {
        method: "DELETE",
     })
     //.then(res => res.json())
     setUserJobs(modifiedJobs)
    // .then 
   }

   //LOGOUT FUNCTIONALITY
   function handleLogOut () {
    fetch("http://127.0.0.1:3000/logout", {
      method: "DELETE",
   })
  //  .then((r) => {
  //   if (r.ok) {
  //     setUser(null);
  //   }
  // });
   //.then(res => res.json())
 }
   

  return (
    <div>
  
    {/* <div> */}
    
      <form id="form">
        <input type="text" name="title" placeholder="job-title" onBlur={handleChange} />
        <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
        <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
        <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
        {/* <input type="integer" name="UserID" onBlur={handleChange}/> */}
         <button type="submit" className="submit" onClick={handlePostJob}>
          Post
        </button>
      </form>

      {/* <div>
 <User userData={userData}/> 
</div>    */}

    {/* </div> */}

    <div className="jobs">
  {filteredUserJobs.map((job) => (
    <div key={job.id} className={"job-container"}>
      <div className={"part1"}>
      <div className = {"position"}>
        <a href = {job.location}>{job.title}</a></div>
      <div className={"company"}>
      <span className = {"cname"}>{job.recruiter}</span>
      </div>
     
    </div>
    
    <div className="part2">
    <span className= "details">{job.stack}</span>
    <button type="button" className ={"icon-box"} onClick={(e) => {
      e.preventDefault()
      handleDelete(job)}} >delete</button>
    </div>
    </div>
  ))}
  
    {/* <div className="header-container"> */}
    <button className="logout" onClick={handleLogOut}>logout</button>
    {/* </div>  */}
</div>

   


    <div className="footer"> ikokk</div>
   
  </div>

       


  )
}

export default UserActions
