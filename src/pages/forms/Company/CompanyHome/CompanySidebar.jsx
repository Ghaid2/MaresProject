import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School'; 
import ListItemIcon from '@mui/material/ListItemIcon';

import { useNavigate } from 'react-router-dom';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const Navigate= useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const ClickHandler = () =>{
    Navigate('../Cinfo')
  }

  const ClickHandleResume = () =>{
    Navigate('../Resume')
  }

  
  const ClickHandleViewCompanyProfile = () =>{
    Navigate('../ViewCompanyProfile')
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <Divider />
      <List sx={{ textAlign: 'center' }}>
        <Typography textAlign='center' variant="h6" noWrap sx={{ mt: 2, fontFamily: 'Tajawal, sans-serif' }}>
           ملف الشركة
        </Typography>

        <ListItem disablePadding>
          <ListItemButton onClick={ClickHandleViewCompanyProfile}>
            <ListItemIcon>
              <VisibilityIcon />
            </ListItemIcon>
            <ListItemText sx={{ textAlign:"start" }} primary="مشاهدة ملف الشركة"      />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding >
          <ListItemButton onClick={ClickHandler}>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText sx={{ textAlign:"start" }} primary="معلومات الشركة" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton onClick={ClickHandleResume}>
            <ListItemIcon>
              <DescriptionIcon />
            </ListItemIcon>
            <ListItemText sx={{ textAlign:"start" }} primary="إدارة الطلبات" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText sx={{ textAlign:"start" }} primary="إنشاء فرص التدريب" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HelpOutlineIcon />
            </ListItemIcon>
            <ListItemText sx={{ textAlign:"start" }} primary="إدارة الفرص" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <DescriptionIcon />
            </ListItemIcon>
            <ListItemText  sx={{ textAlign:"start" }} primary="الفرص المنشورة" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <DescriptionIcon />

            </ListItemIcon>
            <ListItemText  sx={{ textAlign:"start" }} primary="الفرص المنجزة" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
            <DescriptionIcon />

            </ListItemIcon>
            <ListItemText  sx={{ textAlign:"start" }} primary="الفرص الغير متاحة" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
  <ListItemButton>
    <ListItemIcon>
      <ExitToAppOutlinedIcon />
    </ListItemIcon>
    <ListItemText 
    sx={{ textAlign:"start" }}
      primary="تسجيل الخروج" 
      style={{fontFamily: 'Tajawal'}}
    />
  </ListItemButton>
</ListItem>


      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
       anchor='right'
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              backgroundColor: '#efefef', // تغيير لون الشريط هنا
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
