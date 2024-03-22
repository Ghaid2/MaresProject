import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './mareslogo.png'; // استيراد اللوغو
//import AvatarImage from './avatar.png'; // استيراد صورة الأفاتار

const StudentHeader = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header__nav">
        <Link to="/opportunities">الفرص التدريبية</Link>
        <Link to="/training">التدريب الالكتروني</Link>
        <div className="header__dropdown">

          <div className="header__dropdown-content">
            <Link to="/profile">عرض الملف الشخصي</Link>
            <br></br>
            <Link to="/opportunities">الفرص التدريبية</Link>
            <br></br>
            <Link to="/assistant">مساعدك الشخصي</Link>
            <br></br>
            <Link to="/training">التدريب الالكتروني</Link>
            <br></br>
            <Link to="/logout">تسجيل الخروج</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default StudentHeader;
