import React from 'react'
import { useEffect, useState } from 'react'
// import User from './User'
import Header from './Header'
import NavBar from './NavBar'
import PostEditor from "./PostEditor";
import Modal from './Modal';
import AddJobModal from './AddJobModal';
import Card from './Card';
import { useNavigate } from "react-router-dom";


function UserActions({user, setUser}) {

  const navigate = useNavigate();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  

  const [user_id, setUser_Id] = useState(null)
  const [userJobs, setUserJobs] = useState([])
  const [showDelete, setShowDelete] = useState([false])

 console.log(user)

 //fetch job(s) with a particular user id
   useEffect(() => {
    
     fetch("/jobs")
   
       .then(response => response.json())
       .then(data => setUserJobs(data))
   }, [])
//filter jobs by id 
const filteredUserJobs = userJobs.filter(job => job.user_id == user.id)


  

//console.log(filteredUserJobs)
  
//form StateVar
const [formData, setFormData] = useState([]);

//stores input value into StateVar
  function handleChange(e) {

    setUser_Id(user.id)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
       "user_id": user_id
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
      })
      )
      .then( navigate("/UserActions"))

      
    //   :
    //   alert("sorry, unrecognized name")
  }

   //DELETE FUNCTIONALITY
   function handleDelete(targetJob) {
     const modifiedJobs = userJobs.filter((job) => job !== targetJob) 

     //e.stopPropagation()
     console.log(targetJob)
    //e.preventDefault();
     fetch(`/jobs/${targetJob.id}`, {
         method: "DELETE",
      })
     .then(res => res.json())
     setUserJobs(modifiedJobs)
     //.then 
   }

   //LOGOUT FUNCTIONALITY
   function handleLogOut () {
    fetch("/logout", {
      method: "DELETE",
   })
   .then((r) => {
     if (r.ok) {
       setUser(null);
       navigate("/");
     }
 });
   //.then(res => res.json())
 }
   
 const specialLister = filteredUserJobs.map((job => {
  console.log(job)
  return <Card handleDelete={handleDelete} showDelete={showDelete} key = {job.id} job = {job}  />

}))


  return (
    <div>
         <AddJobModal user = {user} showModal={showModal} setShowModal={setShowModal} />
  
      {/* <Modal isModalOpen={isModalOpen}  setIsModalOpen={setIsModalOpen}/> */}
    {/* <div> *

      {/* <PostEditor/> */}
      {/* <div style={containerStyles}>
      <button onClick={() => setIsModalOpen(true)}>New Job</button> */}
      {/* <button style={buttonStyles} onClick >Submit Job</button> */}
    {/* </div>
     */}
  

      {/* <div>
 <User userData={userData}/> 
</div>    */}

    {/* </div> */}

   {/* <Card filteredUserJobs = {filteredUserJobs}/> */}
   {/* <div style={cardContainer}> */}
    <div style={headerContainer}>
    <div style={headerCell}>Title</div>
      <div style={headerCell}>Recruiter</div>
      <div style={headerCell}>Skills</div>
      <div style={headerCell}>Description</div>
    </div>
   {specialLister}

   <form className='posting-form'>
        <input type="text" name="title" placeholder="job-title"
         />
        <input type="text" name="recruiter" placeholder="recruitername" onBlur={handleChange} />
        <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
        <input type="text" name="stack" placeholder="skills" onBlur={handleChange} />
         {/* <input type="integer" name="UserID" onBlur={handleChange}/>  */}
          <button type="submit"  onClick={handlePostJob}>
          Submit
        </button>
      </form> 
  
      <div class="controls-container">

      <button class = "button" onClick={() => setShowModal(true)}>Add Job</button>

      <button class = "button" type="submit"  onClick={handleLogOut}>
          logout
        </button>
  
</div>

    


   


  
   
  </div>

       


  )
}

export default UserActions


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

const headerContainer = {
  display: 'flex',
  backgroundColor: '#3C3C3C',
  padding: '10px 0',
  fontSize: '16px',
  fontFamily: 'Arial, sans-serif',
  borderBottom: '2px solid #E5E5E5',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
  color: '#FFFFFF',
};

const headerCell = {
  width: '35%',
  padding: '8px',
  fontWeight: 'bold',
  textAlign: 'left',
  fontSize: '14px',
  borderTop: '1px solid rgba(229, 229, 229, 0.5)',
  borderLeft: '1px solid rgba(229, 229, 229, 0.5)',
  borderRight: '1px solid rgba(229, 229, 229, 0.5)',
  borderBottom: '1px solid rgba(229, 229, 229, 0.5)',
  backgroundColor: '#3C3C3C',
  color: '#FFFFFF',
};



// const headerContainer = {
//   display: "flex",
//   backgroundColor: "#7DCE82",
//    padding: "10px 0",
//   fontSize: "14px"
// };


//  const cardContainer = {
//    border: "1px solid gray",
//     borderRadius: "5px",
//     padding: "10px",
//    fontSize: "14px",
//    width: "400px",
//    margin: "0px",
//    fontFamily: "Spartan, sans-serif"


//  };

  
// const headerCell = {
//   width: "35%",
//   // padding: "10px",
//   fontWeight: "bold",
//   textAlign: "left",
//   fontSize: "14px"
//   // borderRight: "1px solid gray"
// };