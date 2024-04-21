
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";


import Student from "./pages/forms/Student/Student";

import StudentSignup from "./pages/forms/Student/StudentSignup";
import StudentSignin from "./pages/forms/Student/StudentSignin";
import ResetPassword from "./pages/forms/ResetPassword/ResetPassword"
import Footer from "./components/footer/Footer";
import HeroSection from "./pages/home/HeroSection/HeroSection";
//Student
import StudentHome from "./pages/forms/Student/StudentHome/StudentHome";
import Test from "./pages/forms/Student/StudentHome/Test";
import Profile from "./pages/forms/Student/StudentProfile/Profile";
import Resume from "./pages/forms/Student/StudentProfile/Resume";
//Company 
import Company from "./pages/forms/Company/Company";
import CompanySignin from "./pages/forms/Company/CompanySignin";
import CompanySignup from "./pages/forms/Company/CompanySignup";
import ViewCompanyProfile from "./pages/forms/Company/ViewCompanyProfile";
////////////////
// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react"
import CompanyHome from './pages/forms/Company/CompanyHome/CompanyHome';
import CreateOpportunity from './pages/forms/Company/CreateOpportunity';
import Cinfo from './pages/forms/Company/Cinfo';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  <HeroSection/>
  
  return (
    

    <BrowserRouter >
     

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/StudentSignin" element={<StudentSignin />} />
  <Route path="/StudentSignup" element={<StudentSignup />} />
  <Route path="/Student" element={<Student />} />
  <Route path="/Company" element={<Company />} />
  <Route path="/CompanySignin" element={<CompanySignin />} />
  <Route path="/CompanySignup" element={<CompanySignup />} />
<Route path="/ResetPassword" element={<ResetPassword/>} />
<Route path="/StudentHome" element={<StudentHome/>} />
<Route path="/Test" element={<Test/>} />
<Route path="/Profile" element={<Profile/>} />
<Route path="/Resume" element={<Resume/>} />
<Route path="/CompanyHome" element={<CompanyHome/>} />
<Route path="/CreateOpportunity" element={<CreateOpportunity/>} />
<Route path="/Cinfo" element={<Cinfo/>} />
<Route path="/ViewCompanyProfile" element={<ViewCompanyProfile/>} />






  

</Routes>
<Footer />

    </BrowserRouter>



  ); 
  
}




export default App;
