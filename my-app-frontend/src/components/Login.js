import React from 'react'
import { useEffect, useState } from 'react'
import User from './UserActions'
import Header from './Header'
import AddJobForm from './AddJobForm'
import Job from './Job'
import { useNavigate } from 'react-router'
import NavBar from './NavBar'
import UserActions from './UserActions'



function Login({user, setUser, errorMessage, setErrorMessage}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("")

  // const [errorMessage, setErrorMessage] = useState("")
  
  // const [formData, setFormData] = useState([])
  const navigate =useNavigate()
  // const [loggedUser, setLoggedUser] = useState(null) 


// const [newUser, setNewUser] = useState("")
// const [newUserPassword, setNewUserPassword] = useState("")
const [passwordConfirmation, setPasswordConfirmation] = useState("");
 
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, password}),
    })
      .then((r) => {
        if (r.ok) {
          r.json().then((data) => setUser(data.user));
         console.log(user)
          navigate('/UserActions')  
        }
        else {
          // Handle error response
          r.json().then((data) => {
            setErrorMessage(data.errors)
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
        }
      }) 
      //     .then(data => {
      //   console.log(data.message);
      // })
        .catch(error => {
          console.error(error);
          setErrorMessage('An error occurred. Please try again.')
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
          
        });
    
  }

//   function handleNewUserName(e) {

// //     setFormData({
// //   ...formData,
// //     [e.target.name]: e.target.value,
// //     })
// //  console.log(formData)
//    }


  function handlePostNewUser(e) {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/submit/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         //formData
         name,
         password,
         passwordConfirmation
      }),
    })
      .then((r) => r.json())
      .then((data) => setUser(data));
  }



  return (
    <div>
      {/* <div className="header">
          <NavBar />
        </div> */}

   

{errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
   
    
    <form className='login-form' onSubmit={handleSubmit}>
    <h3>You need to Log in</h3>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="password"
        placeholder="enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>

      
    

<form className='login-form' >
<h3>Or Sign Up</h3>
  <input type="text" name="name" placeholder="enter your name" onBlur={(e) => setName(e.target.value)} />
  <input type="password" name="password" placeholder="enter your password" onBlur={(e) => setPassword(e.target.value)} />
  <input type="password" name="password" placeholder="confirm your password" onBlur={(e) => setPasswordConfirmation(e.target.value)} />
  <button type="submit" onClick={handlePostNewUser}>Add Your Name
        </button>
                </form>

              
    </div>
  );
}



export default Login