import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddJobModal({showModal, setShowModal, user, errorMessage, setErrorMessage}) {
  // [showModal, setShowModal] = useState(false);

  // const handleOpenModal = () => setShowModal(true);
  // const handleCloseModal = () => setShowModal(false);

  const [formData, setFormData] = useState([]);
  const [userJobs, setUserJobs] = useState([])

  const navigate = useNavigate()

  function handleChange(e) {

    // setUser_Id(user.id)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
       "user_id": user.id
    })
   console.log(formData)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    fetch("/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => { 
        if (res.ok) { 
        res.json().then((data) => setUserJobs({...userJobs, data}))
    }
    else {
        // Handle error response
        res.json().then((data) => {
          setErrorMessage(data.errors)
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        })
    }
  }
    )
     .then(setShowModal(false))
     .then( navigate("/UserActions"))
     .catch(error => {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.')
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      
    });

  };

  return (
    <>
    
{errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
   

      {/* The modal */}
      {showModal && (
        <div className="modal">
          {/* Modal content */}
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <h2>Add New Job</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="job-title">Job Title:</label>
              <input type="text" id="title" name="title"  onBlur={handleChange} required />

              <label htmlFor="url">Url:</label>
              <input type="url" id="url" name="location"  onBlur={handleChange} required />

              <label htmlFor="recruiter">Recruiter:</label>
              <input type="text" id="recruiter" name="recruiter"  onBlur={handleChange} required />

              <label htmlFor="details">Brief description:</label>
              <textarea id="description" name="details"  onBlur={handleChange} required></textarea>
              <label htmlFor="category">Category:</label>
              <select id="category" name="category"  onBlur={handleChange} required>
                <option value="">Select a category</option>
                <option value="Category 1">Category 1</option>
                <option value="Category 2">Category 2</option>
                <option value="Category 3">Category 3</option>
              </select>

              <label htmlFor="deadline">Deadline:</label>
              <input type="date" id="deadline" name="deadline"  onBlur={handleChange} required />


              <button type="submit">Add Job</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}



export default AddJobModal;
