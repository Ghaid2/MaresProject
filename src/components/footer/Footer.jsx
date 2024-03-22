import React from 'react';

const Footer = () => {
  return (
    <footer style={styles}>
      <div >
      <span>جميع الحقوق محفوظة لشركة مارس التقنيه 2024</span>
      </div>
      <div className="followus">
        <a href="#" className="bi bi-facebook "></a>
        <a href="#" className="bi bi-twitter-x "></a>
        <a href="#" className="bi bi-instagram "></a>
      </div>
      
    </footer>
  );
};

const styles = {
  color: "var(--dark-color)",
  fontSize: "15px",
  backgroundColor: "var(--green-color)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
  padding: "40px", // Added padding for spacing between icons and text
};

export default Footer;




  
