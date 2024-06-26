import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CompanyHeader from './CompanyHome/CompanyHeader/CompanyHeader';
import CompanySidebar from './CompanyHome/CompanySidebar';
import EventIcon from '@mui/icons-material/Event';
import PersonIcon from '@mui/icons-material/Person';

const Cinfo = () => {
    const [formData, setFormData] = React.useState({
        CompanyName: '',
        CompanyField: '',
        phone: '',
        CompanyAddress: '',
        city: '',
        CommercialRegistrationNumber:'',
        CompanySector:'',
        DescriptionCompany:'',
        CompanyImage:'',
        Facebook:'',
        Twitter:'',
        Instagram:'',
        LinkedIn:'',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await fetch(' ', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log('Response from server:', data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
     <div>
           <CompanyHeader/>  
             <Grid container direction="column" justifyContent="flex-start" alignItems="center" style={{ height: '100vh' }}>

             <h2 style={{ fontFamily: 'Tajawal, sans-serif' }}>معلومات الشركة </h2>

            <h3 style={{ fontFamily: 'Tajawal, sans-serif' }}>معلومات عامة </h3>

          
            <TextField
                margin="normal"
                required
                name="CompanyName"
                label= {<span style={{ fontFamily: 'Tajawal, sans-serif'}}>اسم الشركة </span>}
                value={formData.CompanyName}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <PersonIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
            <TextField
                margin="normal"
                required
                name="CompanyField"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}> مجال الشركة </span>}
                value={formData.CompanyField}
                onChange={handleChange}
               
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
         

        
            <TextField
                margin="normal"
                name="phone"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>رقم الهاتف  </span>}
                value={formData.phone}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <PhoneIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif' }} 
            />
     

          
            <h3 style={{ fontFamily: 'Tajawal, sans-serif' }}>موقع الشركة </h3>

            <TextField
                margin="normal"
                name="CompanyAddress"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}> عنوان الشركة </span>}
                value={formData.CompanyAddress}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <LocationOnIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif '   }} 
            />
         

   
            <TextField
                margin="normal"
                name="city"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}> المدينة </span>}
                value={formData.city}
                onChange={handleChange}
                InputProps={{
                    startAdornment: (
                        <LocationCityIcon />
                    ),
                }}
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif '   }} 
            />
         
             
   
            <TextField
                margin="normal"
                name="CommercialRegistrationNumber"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>السجل التجاري </span>}
                value={formData.CommercialRegistrationNumber}
                onChange={handleChange}
               
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif '   }} 
            />
        


          <h3 style={{ fontFamily: 'Tajawal, sans-serif' }}>حول العمل</h3> 


          <TextField
                margin="normal"
                name="CompanySector"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>قطاع الشركة</span>}
                value={formData.CompanySector}
                onChange={handleChange}
               
                style={{ width: '50%', fontFamily: 'Tajawal, sans-serif '   }} 
            /> 

            <h4>عن الشركة </h4>
                <TextareaAutosize
                    aria-label="self-description"
                    placeholder="اكتب وصفًا عن الشركة..."
                    name="DescriptionCompany"
                    value={formData.DescriptionCompany}
                    onChange={handleChange}
                    style={{ width: '50%', minHeight: '100px', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                />
          

            
                <h4>صور من بيئة العمل</h4>
                <Button
                 variant="contained"
                 component="label"
                 startIcon={<CloudUploadIcon />}
                 style={{ fontFamily: 'Tajawal, sans-serif', marginBottom: '20px', backgroundColor: 'mediumaquamarine' }}
                 >
               <input
                 type="file"
                 hidden
                 name="CompanyImage"
                 onChange={handleChange}
               />
                </Button>
              

           


                <h3 style={{ fontFamily: 'Tajawal, sans-serif' }}>وسائل التواصل الإجتماعي</h3> 

                <TextField
                margin="normal"
                name="Facebook"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>فيسبوك</span>}
                value={formData.Facebook}
                onChange={handleChange}
               
                style={{ width: '30%', fontFamily: 'Tajawal, sans-serif '   }} 
                />
           
       
                <TextField
                margin="normal"
                name="Twitter"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>تويتر</span>}
                value={formData.Twitter}
                onChange={handleChange}
               
                style={{ width: '30%', fontFamily: 'Tajawal, sans-serif '   }} 
                />
       
             
                <TextField
                margin="normal"
                name="Instagram"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>انستقرام</span>}
                value={formData.Instagram}
                onChange={handleChange}
               
                style={{ width: '30%', fontFamily: 'Tajawal, sans-serif '   }} 
                />
                

                <TextField
                margin="normal"
                name="LinkedIn"
                label={<span style={{ fontFamily: 'Tajawal, sans-serif'}}>لينكد ان</span>}
                value={formData.LinkedIn}
                onChange={handleChange}
               
                style={{ width: '30%', fontFamily: 'Tajawal, sans-serif '   }} 
                />
           

        








<Button
         onClick={handleSave}
        type="submit"
      
        sx={{ mt: 3, mb: 2 }}
        style={{ backgroundColor: 'mediumaquamarine', color: 'black' , width: '50%', fontFamily: 'Tajawal, sans-serif'}}
      >
      <span> حفظ</span> 
  
      </Button  >
              </Grid>
      
     </div>
    );
};

export default Cinfo;


