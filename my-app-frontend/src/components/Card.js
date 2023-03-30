import React from "react";

// const Card = ({ job, showDelete, handleDelete }) => (
//   <a href={job.applicationUrl} className="card-link">
//   <div className="card-container" >
//     <div className="card-row">
//       <div className="cell">{job.title}</div>
//       <div className="cell">{job.recruiter}</div>
//       <div className="cell">{job.details}</div>
//       <div className="cell">{job.deadline}</div>
//     </div>
//     {showDelete && (
//       <button className="card-delete-btn" onClick={() => handleDelete(job)}>
//         DEL
//       </button>
//     )}
//   </div>
//   </a>
// );

// export default Card;



// const Card = ({ job }) => (
//   <div className="card">
//     <div className="card-header">
//       <h3 className="card-title">{job.title}</h3>
//     </div>
//     <div className="card-body">
//       <p className="card-text">{job.details}</p>
//       <div className="button-container">
//         <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-button">
//           Apply
//         </a>
//       </div>
//     </div>
//     <div className="card-footer">
//       <span className="card-recruiter">{job.recruiter}</span>
//       <span className="card-deadline">{job.deadline}</span>
//     </div>
//   </div>
// );

// export default Card;


import defaultImage from "./images/adult-looking-horizontal-green-screen-computer-work-employee-with-headphones-working-from-home-with-chroma-key-device-mockup-template-isolated-background.jpg";

const Card = ({ job }) => (
  <div className="card">
    <img src={job.image || defaultImage} alt={job.title} className="card-image" />
    <div className="card-header">
     <a href = {job.location}> <h4 className="card-title">{job.title}</h4> </a>
     <div className="card-footer">
     <span className="card-recruiter">{job.recruiter}</span>
     <span className="card-deadline">{job.deadline}</span>
     </div>
    </div>
    <div className="card-body">
      <p className="card-text">{job.details}</p>
      {/* <div className="button-container">
        <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-button">
          Apply
        </a>
      </div> */}
    </div>
   
  </div>
);

export default Card;








// import React from "react";

// const Card = ({ job, showDelete, handleDelete }) => (
//   <div style={cardContainer}>
//     {/* <div style={headerContainer}>
//       <div style={headerCell}>Title</div>
//       <div style={headerCell}>Recruiter</div>
//       <div style={headerCell}>Skills</div>
//       <div style={headerCell}>Description</div>
//     </div>  */}

//     <div style={cardRow}>
//       <div style={cell}>{job.title}</div>
//       <div style={cell}>{job.recruiter}</div>
//       <div style={cell}>{job.details}</div>
//       <div style={cell}>{job.deadline}</div>
//       {/* {showDelete && <div style={cell}>Delete</div>} */}
//     </div>
//     {showDelete && <button onClick={(e) => {

//       e.preventDefault()
//       handleDelete(job)
//     }}>DEL
//     </button>}
//   </div>
// );
// const cardContainer = {
//   backgroundColor: '#FFFFFF',
//   borderRadius: '0px',
//   boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)',
//   padding: '0px',
//   marginBottom: '4px',
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   border: '1px solid #E0E0E0',
//   height: 'auto',
// };

// const cardRow = {
//   display: 'flex',
//   flexDirection: 'row',
//   backgroundColor: '#F9F9F9',
//   padding: '4px 8px',
//   fontSize: '12px',
//   fontFamily: 'Arial, sans-serif',
//   borderBottom: '1px solid #E0E0E0',
//   borderTop: '1px solid #E0E0E0',
// };

// // const cardContainer = {
// //   backgroundColor: '#FFFFFF',
// //   borderRadius: '0px',
// //   boxShadow: '0px 0px 1px 1px rgba(0, 0, 0, 0.1)',
// //   padding: '0px',
// //   marginBottom: '4px',
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'space-between',
// //   border: '1px solid #F0F0F0',
// // };

// // const cardRow = {
// //   display: 'flex',
// //   flexDirection: 'row',
// //   backgroundColor: '#F9F9F9',
// //   padding: '8px',
// //   fontSize: '12px',
// //   fontFamily: 'Arial, sans-serif',
// //   borderBottom: '1px solid #F0F0F0',
// //   borderTop: '1px solid #F0F0F0',
// // };

// const cell = {
//   flex: '1',
//   fontSize: '12px',
//   fontWeight: 'normal',
//   color: '#333333',
//   padding: '8px',
//   borderRight: '1px solid #F0F0F0',
//   borderBottom: '1px solid #F0F0F0',
// };




// // const cardContainer = {
// //   backgroundColor: '#F4F4F4',
// //   borderRadius: '4px',
// //   boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
// //   padding: '12px',
// //   marginBottom: '12px',
// //   display: 'flex',
// //   flexDirection: 'column',
// //   justifyContent: 'space-between'
// // };

// // const cardRow = {
// //   display: "flex",
// //   flexDirection: "row",
// //   backgroundColor: "#E5E5E5",
// //   padding: "2px",
// //   fontSize: "12px",
// //   fontFamily: "Arial, sans-serif",
// // };

// // const cell = {
// //   flex: '1',
// //   fontSize: '14px',
// //   fontWeight: '500',
// //   color: '#333333',
// //   padding: '4px',
// //   borderBottom: '1px solid #dcdcdc'
// // };


// // const cardContainer = {
// //   // border: "1px solid gray",
// //   // borderRadius: "5px",
// //   paddingTop: "10px",
// //   fontSize: "14px"
// //   // width: "400px"
// // };

// // const cardRow = {
// //   display: "flex",
// //   backgroundColor: "#E5E5E5",
// //   // borderBottom: "1px solid gray",
// //   padding: "2px, 0px, 0px, 0px",
// //   fontSize: "14px",
// //   fontFamily: "Arial, sans-serif",

// // };

// // const cell = {
// //   width: "35%",
// //   height: 35,
// //   // padding: "10px",
// //   fontWeight: "normal",
// //   textAlign: "left",
// //   // alignItems: "center",
// //   fontSize: "14px",
// //   // borderRight: "2px solid gray"
// // };

// export default Card;
