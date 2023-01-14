import React from "react";
import { NavLink } from "react-router-dom";

  //some styling navbar 
  const linkStyles = {
    display: "inline-block",
   width: "auto",
   padding: "2px",
   margin: "6px 6px px 120px",
    textAlign: 'center',
   textDecoration: "none",
  //  color: "999999",
   };
  

function NavBar({user}) {



  return (
    <div>
      <NavLink
        
        to="/"
        exact
        style={linkStyles}
      

      >
  
        Home
        
      </NavLink> |
  
        {user ?    
         <NavLink
          to="/UserActions"
    
          exact
          style={linkStyles}
          >
            Submit Job
        </NavLink> 


      :
      <NavLink
      to="/Submit"

      exact
      style={linkStyles}
      >
        Submit
    </NavLink>
      }
    </div>
  );
}

export default NavBar;