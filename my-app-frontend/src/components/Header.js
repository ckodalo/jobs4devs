import React from "react";
import close from "./images/icon-remove.svg";
import NavBar from "./NavBar";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div>
      <NavBar/>
      {/* <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className="close" onClick={() => removeKeywords(key)}>
                <img src={close} alt="" />
              </button>
            </li>
          );
        })}
        <a href="#" onClick={() => clearAll()}>
          Clear
        </a>
      </ul> */}
    </div>
  );
};

export default Header;