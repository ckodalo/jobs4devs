import React, { useState } from "react";
import PostEditor from "./PostEditor";

 const Modal = ({isModalOpen, setIsModalOpen}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
const [postJobSelected, setPostJobSelected] = useState(false);
const [submitUrlSelected, setUrlSelected] = useState(false);

  return (
    <div>
      <PostEditor postJobSelected={postJobSelected}  setPostJobSelected={setPostJobSelected}/>
      {/* <button onClick={() => setIsModalOpen(true)}>Submit Job</button> */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Submit Job</h3>
            <p>Choose an option:</p>
            <button className="modal-button" onClick={() => setPostJobSelected(true)}>
              Post Job
            </button>
            <button className="modal-button" onClick={() => console.log("Submit Custom")}>
              Share JD link
            </button>
            <button className="close-button" onClick={() => setIsModalOpen(false)}> &times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
