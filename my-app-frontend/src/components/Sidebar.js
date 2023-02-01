import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import SearchTool from './SearchTool';
import NavBar from './NavBar';

function Sidebar({user}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidebar">
       <div className='navbar'>
      <NavLink
        
        to="/"
        exact
        // style={linkStyles}
      

      >
  
        Home
        
      </NavLink> 
  
        {user ?    
         <NavLink
          to="/UserActions"
    
          exact
          // style={linkStyles}
          >
            Submit Job
        </NavLink> 


      :
      <NavLink
      to="/Submit"

      exact
      // style={linkStyles}
      >
        Submit
    </NavLink>
      }
    </div>
    </div>
  );
}

export default Sidebar;