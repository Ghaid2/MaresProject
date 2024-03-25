

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Home from "./pages/home/Home";

import Student from "./pages/forms/Student/Student";
import Company from "./pages/forms/Company/Company";
import CompanySignin from "./pages/forms/Company/CompanySignin";
import CompanySignup from "./pages/forms/Company/CompanySignup";
import Student_signup from "./pages/forms/Student/Student_signup";
import Student_signin from "./pages/forms/Student/Student_signin";
import ResetPassword from "./pages/forms/ResetPassword/ResetPassword"
import Footer from "./components/footer/Footer";
import HeroSection from "./pages/home/HeroSection/HeroSection";
//Student
import StudentHome from "./pages/forms/Student/StudentHome/StudentHome";



////////////////
// Material UI imports
import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";

import Switch from "@mui/material/Switch";
import { useState } from "react"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  <HeroSection/>
  
  return (
    

    <BrowserRouter >
     

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Student_signin" element={<Student_signin />} />
  <Route path="/Student_signup" element={<Student_signup />} />
  <Route path="/Student" element={<Student />} />
  <Route path="/Company" element={<Company />} />
  <Route path="/CompanySignin" element={<CompanySignin />} />
  <Route path="/ CompanySignup" element={<CompanySignup />} />
<Route path="/ResetPassword" element={<ResetPassword/>} />
<Route path="/StudentHome" element={<StudentHome/>} />






  

</Routes>
<Footer />

    </BrowserRouter>



  ); 
  
}




export default App;
