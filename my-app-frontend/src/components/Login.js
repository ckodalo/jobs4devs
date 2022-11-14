import React from 'react'
import { useEffect, useState } from 'react'
import User from './User'
import Header from './Header'
import AddJobForm from './AddJobForm'
import Job from './Job'


function Login() {
  
 //LOGIN FUNCTIONALITY
 
  //login constants
  const [name, setName] = useState('')
  const [userData, setUserData] = useState({})
  const [IsLoggedIn, setIsLoggedIn] = useState(false)

  //let userData

  //fetches users with name == user input
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`https://obscure-springs-19515.herokuapp.com/users/${name}`)
      .then(res => res.json())
      .then(data => setUserData(data))
    console.log(userData)
    setIsLoggedIn(true)
    console.log(IsLoggedIn)
  }

//GET FUNCTIONALITY

  //state for holding jobs.json
  const [jobs, setJobs] = useState([])

  //fetch job(s) with a particular user id
     useEffect(() => {
  fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${userData.id}`)
    .then(response => response.json())
    .then(data => setJobs(data))
     },[]) 


  //form StateVar
  const [formData, setFormData] = useState([]);

  //stores input value into StateVar
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

  }

 // POST FUNCTIONALITY

  //Post Jobs functionality
  function handlePost(e) {
    e.preventDefault();
    fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => console.log(data));
    }

// //DELETE FUNCTIONALITY
// function handleDelete(e) {
//   e.preventDefault();
//   fetch(`https://obscure-springs-19515.herokuapp.com/jobs${id}`, {
//     method: "DELETE",
//  })
//  .then(res => res.json())
//  .then 
// }




  // useEffect (() => {
  //     fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${name}`)
  //         .then(response => response.json())
  //         .then(data => console.log(data)) 
  // })

  return (
    IsLoggedIn ?
      <div>
         <div className="header">
          <Header />
        </div> 
        <div>
          <form id="form">
            <input type="text" name="title" placeholder="job-title" onBlur={handleChange}/>
            <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
            <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
            <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
            <button type="submit" id="submit" onClick={handlePost}>
              Add a Job
            </button>
          </form>

          {/* <div>
     <User userData={userData}/> 
    </div>    */}

        </div>
        {/* <AddJobForm /> */}
        {/* <div className="header">
          <Header />
        </div> */}

        <Job jobs={jobs} IsLoggedIn={IsLoggedIn} />


        <div className="footer"></div>
      </div>
      :
      <div>
        <div className="header">
          <h1>Please Enter Your Name to Login</h1>
          <Header />
        </div>
        <form id="form">
          <input type="text" name="name" placeholder="enter your name" onBlur={(e) => setName(e.target.value)} />
          <button type="submit" id="submit" onClick={handleSubmit}>Login
          </button>
        </form>
        {/* <User userData={userData} IsLoggedIn = {IsLoggedIn}/> */}


      </div>
  )
}

export default Login