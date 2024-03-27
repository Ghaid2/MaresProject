import './Student.css';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Header from '../../../components/header/header';



export default function SignUp() {
 
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      confirmpassword: data.get('confirmpassword'),

    });


  };

  return (
    <div>
       <Header/>
       <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: 'Tajawal, sans-serif', 
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'mediumaquamarine;' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           <span>تسجيل جديد</span> 
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>الإسم الأول</span>}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>الإسم الأخير</span>}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                              required
                              fullWidth
                              id="email"
                              label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>الإيميل الإلكتروني </span>}
                              name="email"
                              autoComplete="email"
                              type="email"
             
           
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>كلمة المرور </span>}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmpassword"
                  label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}> تأكيد كلمة المرور</span>}
                  type="password"
                  id="confirmpassword"
                />
              </Grid>
            
            </Grid>
            <Button
        
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: 'mediumaquamarine', color: 'black' }}
            >
            <span>إنشاء حساب</span> 
            </Button  >
            <Grid container justifyContent="flex-end"  >
              <Grid item >
              <span >
  لديك حساب في مارس؟ <a href="/StudentSignin">تسجيل الدخول</a>
</span>                
              </Grid>
            </Grid>
          </Box>
        </Box>
     
      </Container>
      <br></br>
        <br></br>
        <br></br>
     
    </div>
     
   
  );
}