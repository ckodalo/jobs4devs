import React from 'react'
import { useEffect, useState } from 'react'
// import User from './User'
import Header from './Header'
import NavBar from './NavBar'
import PostEditor from "./PostEditor";
import Modal from './Modal';


function UserActions({user, setUser}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    marginTop: "10px"
  };
  
  const buttonStyles = {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  };

  // const [user_id, setUser_Id] = useState(null)
  const [userJobs, setUserJobs] = useState([])
 console.log(user)
  //fetch job(s) with a particular user id
   useEffect(() => {
    
     fetch("/jobs")
   
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
    fetch("/jobs", {
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
    fetch(`/jobs/${targetJob.id}`, {
        method: "DELETE",
     })
     //.then(res => res.json())
     setUserJobs(modifiedJobs)
    // .then 
   }

   //LOGOUT FUNCTIONALITY
   function handleLogOut () {
    fetch("/logout", {
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
      <Modal isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen}/>
    {/* <div> */}

      {/* <PostEditor/> */}
      <div style={containerStyles}>
      <button onClick={() => setIsModalOpen(true)}>New Job</button>
      {/* <button style={buttonStyles} onClick >Submit Job</button> */}
    </div>
    
      {/* <form className='login-form'>
        <input type="text" name="title" placeholder="job-title" onBlur={handleChange} />
        <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
        <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
        <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
        {/* <input type="integer" name="UserID" onBlur={handleChange}/> */}
         {/* <button type="submit"  onClick={handlePostJob}>
          Post
        </button>
      </form> */}

      {/* <div>
 <User userData={userData}/> 
</div>    */}

    {/* </div> */}

    <div className="jobs">
  {filteredUserJobs.map((job) => (
    <div key={job.id} className={"card"}>
      {/* <div className={"part1"}> */}
      <div className = {"job-title"}>
        <a href = {job.location}>{job.title}</a></div>
      <div className={"recruiter"}>
      <span>{job.recruiter}</span>
      {/* </div> */}
     
    </div>
{/*     
    <div className="part2"> */}
    <span className= "skills">{job.stack}</span>
    <button type="button" onClick={(e) => {
      e.preventDefault()
      handleDelete(job)}} >delete</button>
    {/* </div> */}
    </div>
  ))}
  
    {/* <div className="header-container"> */}
    <button onClick={handleLogOut}>logout</button>
    {/* </div>  */}
</div>

   


  
   
  </div>

       


  )
}

export default UserActions
