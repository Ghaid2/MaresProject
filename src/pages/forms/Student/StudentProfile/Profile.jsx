import React from 'react';
import StudentHeader from '../StudentHome/StudentHeader/StudentHeader';
import Sidebar from '../StudentHome/Sidebar';
import Test from '../StudentHome/Test';
import ProfileHeroSection from './ProfileHeroSection'
const Profile = () => {
    return ( <div>
  <StudentHeader />
  <ProfileHeroSection/>

<Sidebar/>
<Test/>
    </div> );
}
 
export default Profile;