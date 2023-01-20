// import React from "react";

// const Search = ({ setSearchKeyword }) => {
//   return (
//     <div className="header-container">
//       <ul>
//         <input type="text" onChange={(e) => setSearchKeyword(e.target.value)} />
//       </ul>
//     </div>
//   );
// };

// export default Search;


import React, { useState } from 'react';

function SearchTool() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do the search here and update searchResults with the results
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={searchTerm} onChange={handleSearch} />
      <button type="submit">Search</button>
      <ul>
        {searchResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </form>
  );
}

export default SearchTool;
