import React from 'react'
import { useEffect, useState } from 'react'
import User from './UserActions'
import Header from './Header'
import AddJobForm from './AddJobForm'
import Job from './Job'


function Login({setUser}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [formData, setFormData] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, password}),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setUser(data));
        }
      }); 
  }

  function handleNewUserName(e) {

    setFormData({
  ...formData,
    [e.target.name]: e.target.value,
    })
 console.log(formData)
   }


  function handlePostNewUser(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData
        // name,
        // password,
        // password_confirmation: passwordConfirmation,
      }),
    })
      .then((r) => r.json())
      .then((data) => setUser(data));
  }



  return (
    <div>
    <h3>Enter Your Name to Post a Job</h3>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
    <h3>or Sign Up</h3>

<form id="form">
  <input type="text" name="name" placeholder="enter your name" onBlur={handleNewUserName} />
  <input type="password" name="password" placeholder="enter your pass" onBlur={handleNewUserName} />
  <input type="password" name="password" placeholder="confirm your pass" onBlur={handleNewUserName} />
  <button type="submit" className="submit" onClick={handlePostNewUser}>Add Your Name
        </button>
                </form>
    {/* <form onSubmit={handlePostNewUser}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password_confirmation">Confirm Password:</label>
      <input
        type="password"
        id="password_confirmation"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form> */}
    </div>
  );
}

/////////////////////////////////////////////////////////////////////////////////


// function Login({ handleDelete}) {

//   //LOGIN FUNCTIONALITY

//   //login constants
//   const [name, setName] = useState('')
//   const [userData, setUserData] = useState({})
//   const [IsLoggedIn, setIsLoggedIn] = useState(false)
//   const [newUser, setNewUser] = useState('')
//   const [user_id, setUser_Id] = useState(null)
 
  
 
//   const [users, setUsers] = useState([])
    
//     useEffect (() => {
//         fetch("https://obscure-springs-19515.herokuapp.com/users")
//          .then(res => res.json())
//          .then(data => setUsers(data))
//     }, [])

//   //let userData

//   //fetches users with name == user input
//   const  targetUser = users.find(user => {
//     if (user.name === name) {
//       return true;
//     }
  
//     return false;
//   });
 

//   function handleSubmit(e) {
//     console.log("clicked")
//   targetUser ?
    
//     fetch(`https://obscure-springs-19515.herokuapp.com/users/${name}`)
//       .then(res => res.json())
//       .then(data => setUserData(data))
//       .then(setIsLoggedIn(true))
//     // console.log(userData)
      
//     // console.log(IsLoggedIn)
//     :
//     alert("sorry, unrecognized name")
//   }

//   //GET FUNCTIONALITY

//   //state for holding jobs.json
//   const [jobs, setJobs] = useState([])

//   //fetch job(s) with a particular user id
//   useEffect(() => {
//     fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${userData.id}`)
//       .then(response => response.json())
//       .then(data => setJobs(data))
//   }, [userData])


//   //form StateVar
//   const [formData, setFormData] = useState([]);

//   //stores input value into StateVar
//   function handleChange(e) {

//     setUser_Id(userData.id)
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//       ["user_id"]: user_id
//     })
//    console.log(formData)
//   }

//   // POST FUNCTIONALITY

//   //Post Jobs functionality
//   function handlePostJob(e) {
//     e.preventDefault();
//   userData.id == user_id ?  
//     fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then(res => res.json())
//       .then(data => console.log(data))
//       :
//       alert("sorry, unrecognized name")
//   }

//   // //DELETE FUNCTIONALITY
//   // function handleDelete(e) {
//   //   e.preventDefault();
//   //   fetch(`https://obscure-springs-19515.herokuapp.com/jobs${id}`, {
//   //     method: "DELETE",
//   //  })
//   //  .then(res => res.json())
//   //  .then 
//   // }




//   // useEffect (() => {
//   //     fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${name}`)
//   //         .then(response => response.json())
//   //         .then(data => console.log(data)) 

//   // })
//    const [UserFormData, setUserFormData] = useState([])

//   function handleNewUserName(e) {
//     setUserFormData({
//       ...UserFormData,
//       [e.target.name]: e.target.value,
//     })

//   }

//   function handlePostNewUser(e) {
//     e.preventDefault()
//     console.log(UserFormData)
//     fetch("https://obscure-springs-19515.herokuapp.com/users", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(UserFormData),
//     })
//       .then(res => res.json())
//       .then(data => console.log(data));
//   }

//   return (
//     IsLoggedIn ?
//       <div>
//         <div className="header">
//           <Header />
//         </div>
//         <div>
        
//           <form id="form">
//             <input type="text" name="title" placeholder="job-title" onBlur={handleChange} />
//             <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
//             <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
//             <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
//             {/* <input type="integer" name="UserID" onBlur={handleChange}/> */}
//             <button type="submit" className="submit" onClick={handlePostJob}>
//               Add a Job
//             </button>
//           </form>

//           {/* <div>
//      <User userData={userData}/> 
//     </div>    */}

//         </div>
//         {/* <AddJobForm /> */}
//         {/* <div className="header">
//           <Header />
//         </div> */}
//         <Job jobs={jobs} IsLoggedIn={IsLoggedIn} handleDelete={handleDelete} />


//         <div className="footer"></div>
//       </div>
//       :
//       <div >
//         <div className="header">

//           <Header />
//         </div>
        
//         <h3>Enter Your Name to Post a Job</h3>
//         <form id="form">
//           <input type="text" name="name" placeholder="enter your name" onBlur={(e) => setName(e.target.value)} />
//           <button type="submit" className="submit" onClick={handleSubmit}>Login
//           </button>
//         </form>
//         {/* <User userData={userData} IsLoggedIn = {IsLoggedIn}/> */}
//         <h3>or Add Your Name</h3>
//         <form id="form">
//           <input type="text" name="name" placeholder="enter your name" onBlur={handleNewUserName} />
//           <button type="submit" className="submit" onClick={handlePostNewUser}>Add Your Name
//           </button>
//         </form>
//       </div>
//   )
// }

export default Login