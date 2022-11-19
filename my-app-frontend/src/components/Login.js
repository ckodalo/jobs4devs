import React from 'react'
import { useEffect, useState } from 'react'
// import User from './User'
import Header from './Header'
// import AddJobForm from './AddJobForm'
// import Job from './AllJobs'
import UserActions from './UserActions'
// import {Navigate} from 'react-router-dom'


function Login() {

  //LOGIN FUNCTIONALITY

  //login constants
  const [name, setName] = useState('')
   const [userData, setUserData] = useState({})
  const [IsLoggedIn, setIsLoggedIn] = useState(false)
  // const [newUser, setNewUser] = useState('')
  
   const [users, setUsers] = useState([])
    
    useEffect (() => {
        fetch("https://obscure-springs-19515.herokuapp.com/users")
         .then(res => res.json())
         .then(data => setUsers(data))
     }, [])


  function handleSubmit(e) {
   
     const loggedUser = users.find(user => {return user.name === name})

     if (loggedUser) {
        setUserData(loggedUser)
        setIsLoggedIn(true)
     }
     else {
      alert("unrecognized name")
     }

    //  loggedUser ? (setUserData(loggedUser), setIsLoggedIn(true)) : alert("unrecognized")
    // users.find(user => {
    //   if (user.name === name) {
    //     setUserData(user)
    //     setIsLoggedIn(true)
    //    return user 
    //   }
    //   else {
    //   alert("sorry, unrecognized name")
    //   }
    //   });
    console.log(userData)
 
  
  }

  //GET FUNCTIONALITY

  //state for holding jobs.json
  // const [jobs, setJobs] = useState([])


  //form StateVar
  // const [formData, setFormData] = useState([]);

  // //stores input value into StateVar
  // function handleChange(e) {

  //   setUser_Id(userData.id)
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //     "user_id": user_id
  //   })
  //  console.log(formData)
  // }

  // // POST FUNCTIONALITY

  // //Post Jobs functionality
  // function handlePostJob(e) {
  //   e.preventDefault();
  // userData.id === user_id ?  
  //   fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     :
  //     alert("sorry, unrecognized name")
  // }

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
   const [newUserData, setNewUserData] = useState([])

   function handleNewUserName(e) {
    console.log(e.target.value)
     setNewUserData({
       ...newUserData,
       [e.target.name]: e.target.value,
     })
     console.log(newUserData)
  }

   function handlePostNewUser(e) {
      e.preventDefault()
    console.log(newUserData)
     fetch("https://obscure-springs-19515.herokuapp.com/users", {
       method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
       body: JSON.stringify(newUserData),
   })
       .then(res => res.json())
      .then(data => console.log(data));
    
  alert("success")
    }
 console.log(userData)
  return (
    // IsLoggedIn ?
    //   <div>
    //     <div className="header">
    //       <Header />
    //     </div>
    //     <div>
        
    //       <form id="form">
    //         <input type="text" name="title" placeholder="job-title" onBlur={handleChange} />
    //         <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
    //         <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
    //         <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
    //         {/* <input type="integer" name="UserID" onBlur={handleChange}/> */}
    //         <button type="submit" className="submit" onClick={handlePostJob}>
    //           Add a Job
    //         </button>
    //       </form>

    //       {/* <div>
    //  <User userData={userData}/> 
    // </div>    */}

        // // </div>
        // {/* <AddJobForm /> */}
        // {/* <div className="header">
        //   <Header />
        // </div> */}

        
        // {/* <Job jobs={jobs} IsLoggedIn={IsLoggedIn}/> */}


      //   <div className="footer"></div>
      // </div>
      // :
        IsLoggedIn ?
        <div>
          <UserActions userData={userData}/>
          
        </div>
        :
      <div>
        <div className="header">

          <Header />
        </div>
        
        <h3>Enter Your Name to Post a Job</h3>
        <form id="form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="enter your name" onBlur={(e) => setName(e.target.value)} />
          <button type="submit" className="submit" >Login
          </button>
        </form>
        {/* <User userData={userData} IsLoggedIn = {IsLoggedIn}/> */}
        <h3>or Add Your Name</h3>
        <form id="form" onSubmit={handlePostNewUser}>
          <input type="text" name="name" placeholder="enter your name" onBlur={handleNewUserName} />
          <button type="submit" className="submit" >Add Your Name
          </button>
        </form>
     
      </div>
  )
}

export default Login