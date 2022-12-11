// import React, {useState} from "react";
// // import Header from "./Header";
// // import NavBar from "./NavBar";
// // import User from "./User";
// //import Login from "./Login";

// function AddJobForm() {
//      //GET FUNCTIONALITY

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

// return (
//     <div>
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
//           </div>
//           </div>
// )
// }
// import React, {useState} from "react";
// import Header from "./Header";
// import NavBar from "./NavBar";
// import User from "./User";
// import Login from "./Login";

// function AddJobForm({userData}) {

//   const [formData, setFormData] = useState([]);

//   // const [newTitle, setTitle] = useState('');
//   //   const [newRecruiter, setRecruiter] = useState('');
//   //   const [newLocation, setLocation] = useState('');
//   //   const [newStack, setStack] = useState('')


 
//    function handleChange(e) {
//      setFormData({
//        ...formData,
//        [e.target.name]: e.target.value,
//      })
    
//    }
// //    function handleSubmit (e) {
// //     e.preventDefault()
// //     fetch(`https://obscure-springs-19515.herokuapp.com/users/${name}`)
// //         .then(res => res.json())
// //         .then(data => setUserData(data))
// //      console.log(userData)
// //      setIsLoggedIn(true)   
// //      console.log(IsLoggedIn)     
// //  return (
// //      // <AddJobForm userData = {userData}/>
// //      <div>
// //      <User userData={userData} IsLoggedIn = {IsLoggedIn}/> 
// //     </div>  

// //  )    
       
// // }




   

//   function handlePost(e) {
//      e.preventDefault();
//     fetch("https://obscure-springs-19515.herokuapp.com/jobs", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(formData), 
//   })
//   .then(res => res.json())
//   .then(data => console.log(data));
//       // setTitle('');
//       // setRecruiter('');
//       // setLocation('');
//       // setStack('');
  

// } 

// return  (

//   <div>
//        <div className="header">
//         <Header/>
//         </div>      
//       <form id="form">
//       <input type="text" name="title" placeholder="job-title"  onBlur={handleChange}/>
//           <input type="text" name="recruiter" placeholder="recruitername"  onBlur={handleChange}/>
//           <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
//           <input type="text" name="stack" placeholder="skills"  onBlur={handleChange}/>
//         <button type="submit" id="submit" onClick={handlePost}>
//             Add a Job
//         </button>
//       </form>
 
//        {/* <div>
//      <User userData={userData}/> 
//     </div>    */}

//     </div>
//   );
// }

// export default AddJobForm;
