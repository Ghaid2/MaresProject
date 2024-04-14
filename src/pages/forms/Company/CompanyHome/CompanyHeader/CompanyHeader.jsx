import "./CompanyHeader.css";
import CHeaderLeft from "./CHeaderLeft";
import CNavbar from "./CNavbar";
import { useState } from "react";

const CompanyHeader = () => {
    const [toggle, setToggle] = useState(false)
    return ( 
        <div className="header">


<CNavbar toggle={toggle} setToggle={setToggle} />
<CHeaderLeft/>


</div>
       
      
     );
}
 
export default CompanyHeader;