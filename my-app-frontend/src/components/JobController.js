
import Job from "./Job";
import { useState, useEffect } from "react";
//import Header from "./Header";
//import Search from "./Search";
import NavBar from "./NavBar";
import SearchTool from "./SearchTool";
import PostEditor from "./PostEditor";
import Card from "./Card";
import UserActions from "./UserActions";

function JobController({user}) {
  const [jobs, setJobs] = useState([]);

  // const cardContainer = {
  //   backgroundColor: '#ffffff',
  //   borderRadius: '4px',
  //   padding: '16px',
  //   margin: '0px',
  //   fontFamily: 'Arial, sans-serif',
  //   boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
  //   fontSize: '16px'
  // };

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
  //   display: 'flex',
  //   backgroundColor: '#212529',
  //   padding: '10px 0',
  //   fontSize: '16px',
  //   fontFamily: 'Arial, sans-serif',
  //   color: '#ffffff'
  // };
  
  // const headerCell = {
  //   width: '35%',
  //   padding: '8px',
  //   fontWeight: 'bold',
  //   textAlign: 'left',
  //   fontSize: '16px',
  //   borderRight: '1px solid #6c757d'
  // };
  
  
//   const cardContainer = {
//     // border: "1px solid gray",
//     // borderRadius: "5px",
//     // padding: "10px",
//     fontSize: "14px",
//     // width: "400px"
//     margin: "0px",
//     // fontFamily: "Spartan, sans-serif"

  
//   };

//   // const cardRow = {
//   //   display: "flex",
//   //   backgroundColor: "#E5E5E5",
//   //   // borderBottom: "1px solid gray",
//   //   // padding: "2px, 0px, 0px, 0px",
//   //   fontSize: "14px",
//   //   // fontFamily: "Arial, sans-serif",
//   //   fontFamily: "Spartan, sans-serif"
//   // };

// const headerContainer = {
//     display: "flex",
//     backgroundColor: "#7DCE82",
//      padding: "10px 0",
//     fontSize: "14px"
//   };
  
//   const headerCell = {
//     width: "35%",
//     // padding: "10px",
//     fontWeight: "bold",
//     textAlign: "left",
//     fontSize: "14px"
//     // borderRight: "1px solid gray"
//   };



  console.log(user)

  useEffect(() => {
    
    fetch('/jobs')
    .then(response => response.json())
    .then(data => setJobs(data)) 
    }, []) 

   
  //   function handleDelete(targetJob) {
  //     console.log("cllic")
  //     console.log(targetJob)
     
  //   setJobs(jobs.filter(job => job !== targetJob))
  
  //     // useEffect (() => {
  //       fetch(`https://obscure-springs-19515.herokuapp.com/jobs/${targetJob.id}`, {
  //         method: "DELETE",
  //         headers: {
  //          "content-type": "Application/JSON"
  //        },
  //        body: JSON.stringify(targetJob)
  //      })
  //      .then((res) => res.json())
  //      .then((data) => console.log(data))
  //    }
  //  // ), []}

  return (
    <div>  
     {/* <SearchTool/> */}
    {/* <div style={cardContainer}> */}
    <div style={headerContainer}>
      <div style={headerCell}>Title</div>
      <div style={headerCell}>Recruiter</div>
      <div style={headerCell}>Skills</div>
      <div style={headerCell}>Deadline</div>
    </div>
   {jobs.map((job) => { return <Card job = {job} /> } )}


     </div>
  
  //  </div>
    
   
  );
}

export default JobController;




  
