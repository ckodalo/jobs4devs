import Job from "./Job";
import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SearchTool from "./SearchTool";
import PostEditor from "./PostEditor";
import Card from "./Card";
import UserActions from "./UserActions";

function JobController({ user }) {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage, setJobsPerPage] = useState(10);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(process.env.REACT_APP_API_URL);

  

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/jobs`)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      {/* <div className="job-controller-header">
        <div className="job-controller-header-cell">Title</div>
        <div className="job-controller-header-cell">Recruiter</div>
        <div className="job-controller-header-cell">Skills</div>
        <div className="job-controller-header-cell">Deadline</div>
      </div> */}

      <div className="job-controller-body">
      {currentJobs.map((job) => (
    <div className="job-controller-column">
      <Card job={job} />
    </div>
  ))}
     </div>

      <div className="job-controller-button-container">
        {Array.from(Array(totalPages).keys()).map((pageNumber) => (
          <button
            className={
              currentPage === pageNumber + 1
                ? "job-controller-button active"
                : "job-controller-button"
            }
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber + 1)}
          >
            {pageNumber + 1} </button>
            ))}
            </div>
            </div>   
            );
          }

export default JobController;






// import Job from "./Job";
// import { useState, useEffect } from "react";
// //import Header from "./Header";
// //import Search from "./Search";
// import NavBar from "./NavBar";
// import SearchTool from "./SearchTool";
// import PostEditor from "./PostEditor";
// import Card from "./Card";
// import UserActions from "./UserActions";

// function JobController({user}) {
//   const [jobs, setJobs] = useState([]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [jobsPerPage, setJobsPerPage] = useState(10);


//    // Get current jobs
//    const indexOfLastJob = currentPage * jobsPerPage;
//    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
   
//    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

//    const totalPages = Math.ceil(jobs.length / jobsPerPage);
 
//    // Change page
//     // const handleNextPage = () => setCurrentPage(currentPage + 1);
//     // const handlePrevPage = () => setCurrentPage(currentPage - 1);

//     const handlePageClick = (pageNumber) => {
//      setCurrentPage(pageNumber);
//    };

//   const buttonContainer = {
//     display: "flex",
//     justifyContent: "center",
//     marginTop: "16px",
//     gap: "8px", // add gap between buttons
//     alignItems: "center", // vertically center buttons
//   };

//   const buttonStyle = {
//     backgroundColor: "#FFFFFF",
//     color: "#3C3C3C",
//     border: "2px solid #3C3C3C",
//     borderRadius: "4px",
//     padding: "8px 16px",
//     fontSize: "14px",
//     cursor: "pointer",
//     transition: "background-color 0.2s",
//     marginRight: "8px",
    
//   };

//   const activeButtonStyle = {
//     backgroundColor: "#3C3C3C",
//     color: "#FFFFFF",
//   };

//   const headerContainer = {
//     marginLeft: '0px',
//     display: 'flex',
//     backgroundColor: '#3C3C3C',
//     padding: '10px 0',
//     fontSize: '16px',
//     fontFamily: 'Arial, sans-serif',
//     borderBottom: '2px solid #E5E5E5',
//     boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
//     color: '#FFFFFF',
//   };
  
//   const headerCell = {
//     width: '35%',
//     padding: '8px',
//     fontWeight: 'bold',
//     textAlign: 'left',
//     fontSize: '14px',
//     borderTop: '1px solid rgba(229, 229, 229, 0.5)',
//     borderLeft: '1px solid rgba(229, 229, 229, 0.5)',
//     borderRight: '1px solid rgba(229, 229, 229, 0.5)',
//     borderBottom: '1px solid rgba(229, 229, 229, 0.5)',
//     backgroundColor: '#3',
//     color: '#FFFFFF',
//   };
  

//   console.log(user)

//   useEffect(() => {
    
//     fetch('/jobs')
//     .then(response => response.json())
//     .then(data => setJobs(data)) 
//     }, []) 

//   return (
//     <div>  
//     <div style={headerContainer}>
//       <div style={headerCell}>Title</div>
//       <div style={headerCell}>Recruiter</div>
//       <div style={headerCell}>Skills</div>
//       <div style={headerCell}>Deadline</div>
//     </div>

//    {currentJobs.map((job) => { return <Card job={job} /> })}
   
//     {/* {jobs.length > jobsPerPage && (
//         <div style={buttonContainer}>
//           <button  style={buttonStyle}  onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
//           <button  style={buttonStyle}  onClick={handleNextPage} disabled={indexOfLastJob >= jobs.length}>Next</button>
//         </div>
//       )}  */}
// <div style={buttonContainer}>
// {Array.from(Array(totalPages).keys()).map((pageNumber) => (
         
//          <button  style={
//           currentPage === pageNumber + 1
//             ? { ...buttonStyle, ...activeButtonStyle }
//             : buttonStyle
//         }  key={pageNumber} onClick={() => handlePageClick(pageNumber + 1)}>
//             {pageNumber + 1}
//           </button>
        
//         ))}
//           </div>

//      </div>   
//   );
// }

// export default JobController;




  
