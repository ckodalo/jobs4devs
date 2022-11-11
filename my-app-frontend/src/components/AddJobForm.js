import React, {useState} from "react";

function AddJobForm() {

  const [formData, setFormData] = useState([]);

  const [newTitle, setTitle] = useState('');
    const [newRecruiter, setRecruiter] = useState('');
    const [newLocation, setLocation] = useState('');
    const [newStack, setStack] = useState('')


 
   function handleChange(e) {
     setFormData({
       ...formData,
       [e.target.name]: e.target.value,
     })
    
   }

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
      // setTitle('');
      // setRecruiter('');
      // setLocation('');
      // setStack('');
  

} 
  return (
    <div>
      <form id="form">
      <input type="text" name="title" placeholder="job-title"  onBlur={handleChange}/>
          <input type="text" name="recruiter" placeholder="recruitername"  onBlur={handleChange}/>
          <input type="text" name="location" placeholder="enter url" onBlur={handleChange} />
          <input type="text" name="stack" placeholder="skills"  onBlur={handleChange}/>
        <button type="submit" id="submit" onClick={handlePost}>
            Add a Job
        </button>
      </form>
    </div>
  );
}

export default AddJobForm;
