import React, { Component } from 'react';
import "./Company.css";

class CompanySignin extends Component{

  constructor(props) {
    super(props);
    this.state = {

      CompanyName:'',
      email: '',
      password: '',
      confirmPassword: '',

      Companylocation:'',
      CompanySector:'',
      CompanyMajor:'', 
      CommercialRegistrationNumber:'',

      FirstNameOfTheOfficial:'',
      LastNameOfTheOfficial:'',
      JobTitle :'',
      PhoneNumber:'',

      
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {CompanyName ,email, password, confirmPassword, Companylocation ,CompanySector,CompanyMajor
    ,CommercialRegistrationNumber,FirstNameOfTheOfficial,LastNameOfTheOfficial, JobTitle ,PhoneNumber} = this.state;

    // You can perform signup logic here, such as sending the data to a server
    console.log('CompanyName:', CompanyName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    console.log('Companylocation', Companylocation );
    console.log('CompanySector', CompanySector );
    console.log('CompanyMajor', CompanyMajor );
    console.log('CommercialRegistrationNumber', CommercialRegistrationNumber );

    console.log('FirstNameOfTheOfficial', FirstNameOfTheOfficial );
    console.log('LastNameOfTheOfficial', LastNameOfTheOfficial );
    console.log('JobTitle', JobTitle );
    console.log('PhoneNumber', PhoneNumber );


    // Optionally, you can reset the form after submission
    this.setState({ CompanyName: '', email: '', password: '', confirmPassword: '', Companylocation: ''
    , CompanySector:'',CompanyMajor:'', CommercialRegistrationNumber:'', FirstNameOfTheOfficial:'',
    LastNameOfTheOfficial:'' ,JobTitle: '' ,PhoneNumber:' '});
  }

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <section className="form-container">
        <h1 className="form-title"> إنشاء حساب جديد</h1>
        <form className="form">

        <div className="form-group">
            <label htmlFor="CompanyName" className="form-label">
            اسم الشركة:
            </label>
            <input
              type="teat"
              id="CompanyName"
              placeholder="ادخل اسم الشركة"
              className="form-input"
            />
          </div>


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

          <h3>معلومات عن الشركة</h3>

         < div className="form-group">
            <label htmlFor="Companylocation" className="form-label">
           موقع الشركة:
            </label>
            <input
              type="teat"
              id="Companylocation"
              placeholder="المدينة -الحي -الشارع "
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="CompanySector" className="form-label">
             قطاع الشركة:
            </label>
            <input
              type="teat"
              id="CompanySector"
              placeholder="ادخل قطاع الشركة"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CompanyMajor" className="form-label">
            مجال الشركة :
            </label>
            <input
              type="teat"
              id="CompanyMajor"
              placeholder="ادخل مجال الشركة"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="CommercialRegistrationNumber" className="form-label">
            رقم السجل التجاري:
            </label>
            <input
              type="teat"
              id="CommercialRegistrationNumber"
              placeholder="ادخل رقم السجل التجاري"
              className="form-input"
            />
          </div>


          <h3>معلومات عن المسؤول</h3>

          <div className="form-group">
            <label htmlFor="FirstNameOfTheOfficial" className="form-label">
            الاسم الأول للمسؤول:
            </label>
            <input
              type="teat"
              id="FirstNameOfTheOfficial"
              placeholder="ادخل الاسم الأول للمسؤول"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="LastNameOfTheOfficial" className="form-label">
            الاسم الأخير للمسؤول:
            </label>
            <input
              type="teat"
              id="LastNameOfTheOfficial"
              placeholder="ادخل الاسم الأخير للمسؤول"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="JobTitle" className="form-label">
            المسمى الوظيفي:
            </label>
            <input
              type="teat"
              id="JobTitle"
              placeholder="ادخل  المسمى الوظيفي"
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

        

          <button type="submit" className="form-btn">
          إنشاء حساب
          </button>
        </form>
        <div className="form-footer">
       لدي حساب في مارس <a href="/Company">تسجيل الدخول</a>
        </div>
      </section>
    );
  }
}


export default CompanySignin;
