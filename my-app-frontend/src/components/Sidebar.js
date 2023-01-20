import React, { useState } from 'react';

import SearchTool from './SearchTool';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="sidebar">
      <SearchTool/>
      <button className="sidebar-toggle" onClick={handleToggle}>
        {isOpen ? 'Close' : 'Open'} Sidebar
      </button>
      {isOpen && (
        <nav className="sidebar-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;