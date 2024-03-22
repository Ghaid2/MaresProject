
import React, { Component } from 'react';
import "./Student.css";

class Student_signin extends Component{

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      UniversityName:'',
      CollegeName:'',
      Major:'',
      DateofBirth:'', 
      PhoneNumber:'',
      location:''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, confirmPassword, UniversityName ,CollegeName,Major
    ,DateofBirth,PhoneNumber,location } = this.state;

    // You can perform signup logic here, such as sending the data to a server
   
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('UniversityName', UniversityName );
    console.log('CollegeName', CollegeName );
    console.log('DateofBirth', DateofBirth );
    console.log('PhoneNumber', PhoneNumber );
    console.log('location', location );



    // Optionally, you can reset the form after submission
    this.setState({ username: '', email: '', password: '', confirmPassword: '', UniversityName:''
    , CollegeName:'',Major:'', DateofBirth:'', PhoneNumber:'',location:'' });
  }

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <section className="form-container">
        <h1 className="form-title"> إنشاء حساب جديد</h1>
        <form className="form">
            
          <div className="form-group">
            <label htmlFor="email" className="form-label">
            البريد الإلكتروني:
            </label>
            <input
              type="email"
              id="email"
              placeholder="ادخل البريد الإلكتروني"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
            كلمة المرور:
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
            تأكيد كلمة المرور:
            </label>
            <input
              type="Password"
              id="confirmPassword"
              placeholder="********"
              className="form-input"
              required
            />
          </div>

          <h3>المعلومات الاداريه</h3>
          <div className="form-group">
            <label htmlFor="UniversityName" className="form-label">
            اسم الجامعة:
            </label>
            <input
              type="teat"
              id="UniversityName"
              placeholder="ادخل اسم الجامعة"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CollegeName" className="form-label">
            اسم الكلية:
            </label>
            <input
              type="teat"
              id="College Name"
              placeholder="ادخل اسم الكلية"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Major" className="form-label">
            التخصص:
            </label>
            <input
              type="teat"
              id="Major"
              placeholder="ادخل التخصص"
              className="form-input"
            />
          </div>


          <h3>المعلومات الشخصية</h3>
          <div className="form-group">
            <label htmlFor="DateofBirth" className="form-label">
           تاريخ الميلاد:
            </label>
            <input
              type="Date"
              id="DateofBirth"
              placeholder="تاريخ الميلاد"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="PhoneNumber" className="form-label">
            رقم الهاتف:
            </label>
            <input
              type="tel"
              id="PhoneNumber"
              placeholder="+٩٦٦٥*********"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="location" className="form-label">
            مكان الاقامة:
            </label>
            <input
              type="teat"
              id="location"
              placeholder="المدينة -الحي -الشارع "
              className="form-input"
            />
          </div>





          <button type="submit" className="form-btn">
          إنشاء حساب
          </button>
        </form>
        <div className="form-footer">
        <p> لديك حساب في مارس؟ <a href="/Student">تسجيل الدخول </a></p>
        </div>
      </section>
    );
  }
}


export default Student_signin;
