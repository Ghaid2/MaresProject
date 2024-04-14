import React from 'react';


const SNavbar = ({ toggle, setToggle }) => {

    return (
  
        <nav >
          <ul className="Snav-links">
          <li onClick={() => setToggle(false)}  className="Snav-link">الفرص التدريبية </li>
          <li  onClick={() => setToggle(false)} className="Snav-link"> التدريب الإلكتروني</li>
             
          </ul>
  
        </nav>
    );
  };
 
export default SNavbar;