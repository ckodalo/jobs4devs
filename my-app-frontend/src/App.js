import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import JobController from "./components/JobController";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import UserActions from "./components/UserActions";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SearchTool from "./components/SearchTool";

function App() {
  const [user, setUser] = useState(null);

  const [errorMessage, setErrorMessage] = useState("");


  console.log(user);
  console.log(process.env.REACT_APP_API_URL);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((data) => setUser(data));
      }
    });
  }, []);

  return (
    <div >
      <main className="app-container">
        <div className="navbar">
          <NavBar user={user} setUser={setUser} />
        </div>

        <Routes>
          <Route
            path="/"
            element={<JobController errorMessage={errorMessage} setErrorMessage={setErrorMessage} user={user} />}
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/UserActions"
            element={<UserActions errorMessage={errorMessage} setErrorMessage={setErrorMessage} user={user} setUser={setUser} />}
          ></Route>
        </Routes>

        <Routes>
          <Route
            path="/Submit"
            element={<Login errorMessage={errorMessage} setErrorMessage={setErrorMessage} user={user} setUser={setUser} />}
          ></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
    
  );
}

export default App;
