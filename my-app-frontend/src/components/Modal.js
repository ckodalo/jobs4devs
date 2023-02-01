import React, { useState } from "react";

 const Modal = ({isModalOpen, setIsModalOpen}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* <button onClick={() => setIsModalOpen(true)}>Submit Job</button> */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Submit Job</h3>
            <p>Choose an option:</p>
            <button className="modal-button" onClick={() => console.log("Submit by URL")}>
              Share URL
            </button>
            <button className="modal-button" onClick={() => console.log("Submit Custom")}>
              Submit Custom
            </button>
            <button className="close-button" onClick={() => setIsModalOpen(false)}> &times;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
