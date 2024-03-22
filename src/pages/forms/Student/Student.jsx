import Student_signin from "./Student_signin";
import Student_signup from "./Student_signup";

import Chip from "@mui/material/Chip";
import FaceIcon from "@mui/icons-material/Face";
import Paper from "@mui/material/Paper";
import LockIcon from "@mui/icons-material/Lock";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const Student = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Paper elevation={4} style={{ padding: "10px", paddingBottom: "50px" ,backgroundColor: '#efefef'}}>
      <div align="center" >
        {checked ? (
          <Chip
          icon={<LockIcon />}
          label="تسجيل جديد"
          variant="outlined"
          style={{ width: '150px', color: 'black', borderColor: 'black', display: 'inline-flex', justifyContent: 'center' }}
        />
        
         
        ) : (
          <Chip
            icon={<FaceIcon />}
            label="تسجيل الدخول"
            variant="outlined"
            color="primary"
          style={{ width: '150px', color: 'black', borderColor: 'black', display: 'inline-flex', justifyContent: 'center' }}

            
          />
        )}
        <br />

        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>

      {checked ? <Student_signin /> : <Student_signup />}
    </Paper>
  );
};

export default Student;
