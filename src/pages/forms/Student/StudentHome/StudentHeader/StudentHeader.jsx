import React from 'react';
import { Link } from 'react-router-dom';
import './StudentHeader.css';
import S_HeaderLeft from './S_HeaderLeft';
import S_HeaderRight from './S_HeaderRight';
import S_Navbar from './S_Navbar';


const StudentHeader = () => {
  return (
 <div className="header">
 < S_HeaderLeft />
  < S_HeaderRight/>
  < S_Navbar/>
 </div>
  );
};

export default StudentHeader;
