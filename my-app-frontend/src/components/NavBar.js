// import React from "react";
// import { NavLink } from "react-router-dom";

// function NavBar({user}) {



//   return (
//     <div>

//       <NavLink
        
//         to="/"
//         exact      
//       >
  
//         Home
        
//       </NavLink> 
  
//         {user ?    
//          <NavLink
//           to="/UserActions"
    
//           exact
 
//           >
//             Submit Job
//         </NavLink> 


//       :
//       <NavLink
//       to="/Submit"

//       exact
//       >
//         Submit
//     </NavLink>
//       }
//     </div>
//   );
// }

// export default NavBar;


import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/" exact>
          upstart
        </NavLink>
      </div>

      <div className="navbar-links">
        <NavLink to="/" exact>
          Home
        </NavLink>

        {user ? (
          <NavLink to="/UserActions" exact>
            Submit Job
          </NavLink>
        ) : (
          <NavLink to="/Submit" exact>
            Submit
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
