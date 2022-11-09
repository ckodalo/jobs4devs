
//import data from "./data.json";
import Job from "./components/Job";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost:9292/jobs')
    .then(response => response.json())
    .then(data => setJobs(data)) 
    }, []) 


  return (
    <div>
      <Job jobs={jobs}/>
    </div>
  );
}

export default App;