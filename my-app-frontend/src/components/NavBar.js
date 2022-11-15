import React from "react";
import { NavLink } from "react-router-dom";


//some styling navbar 
const linkStyles = {
  display: "inline-block",
   width: "auto",
   padding: "2px",
   margin: "6px 6px px 120px",
  
   textDecoration: "none",
   color: "white",
 };

function NavBar() {

  return (
    <div>
      <NavLink
        
        to="/"
        exact
        style={linkStyles}
      

      >
  
        Home
        
      </NavLink> |
     {/* <NavLink
        to="/AddJob"
        exact
        style={linkStyles}
        
        >
        AddJob
     
        </NavLink>  */}

         <NavLink
          to="/Login"
          exact
          style={linkStyles}
          >
            Submit Job
        </NavLink> 

        {/* <NavLink
          to="/User"
          exact
          style={linkStyles}
          >
            User
        </NavLink> */}
    </div>
  );
}

export default NavBar;