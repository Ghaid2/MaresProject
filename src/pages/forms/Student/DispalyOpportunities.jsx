import React from 'react';
import Sidebar from './StudentHome/Sidebar';
import StudentHeader from './StudentHome/StudentHeader/StudentHeader';
import { Link } from "react-router-dom";
;
const DispalyOpportunities = () => {
    return (
        <div>
            <StudentHeader />
           
            <Sidebar />
        </div>
    );
};

export default DispalyOpportunities;