// import React from "react";

// const Footer = () => (
//   <footer style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "60px",
//     backgroundColor: "black",
//     color: "#fff",
//     fontSize: "14px",
//     marginTop: "100%"
//   }}>
//     LightDuty(LD)
//   </footer>
// );

// export default Footer;

import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer style={{
    position: "fixed",
   
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
    color: "#fff",
    fontSize: "14px",
    padding: "30px 20px",
    borderTop: "1px solid #444444",
  }}>
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
    }}>
      <h2 style={{ margin: 0 }}>About Us</h2>
      <p style={{ textAlign: "center", maxWidth: "300px", marginTop: "10px" }}>
        Discover the best jobs in Kenya
      </p>
    </div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "20px",
    }}>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
        <FaTwitter size={24} />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
        <FaFacebook size={24} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px" }}>
        <FaInstagram size={24} />
      </a>
    </div>
    <div style={{ textAlign: "center" }}>
      <p style={{ margin: "0" }}>© 2023 upstart, Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
