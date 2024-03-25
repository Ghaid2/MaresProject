import React from 'react';
import './StudentHome.css'
import StudentHeader from './StudentHeader/StudentHeader'
import S_HeroSection from './S_HeroSection/S_HeroSection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";


const StudentHome = () => {
    return ( 

      <div>
        <StudentHeader />
        < S_HeroSection />
        <div className="homecontainer">
        <div className="content">content</div>
        <div className="sidebar">
الملف الشخصي


        
     
           <Link to="pofile" >معلومات شخصية</Link>

        </div>
        </div>
       
      </div>

     );
}
 
export default StudentHome ;