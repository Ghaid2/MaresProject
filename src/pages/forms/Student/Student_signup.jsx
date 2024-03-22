import React, { useState } from 'react';
import "./Student.css";

const Student_signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Perform authentication logic, e.g., send credentials to backend
      console.log('Email:', email);
      console.log('Password:', password);
      
      // After successful authentication, redirect the user to the dashboard or home page
      // You can use history.push('/dashboard') if you're using React Router
    } catch (err) {
      setError('Invalid email or password');
    }
  };
  
  return (   
    <section className="form-container2">
      <h1 className="form-title">تسجيل الدخول </h1>
      <form onSubmit={handleSubmit} className="form">

        <div className="form-group">
          <label className="form-label">البريد الالكتروني :</label>
          <input
            className="form-input"
            placeholder="ادخل البريد الإلكتروني"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">كلمة المرور:</label>
          <input
            className="form-input"
            placeholder="********"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="form-error">{error}</p>}
        
        <button type="submit" className="form-btn">تسجيل دخول </button>
      </form>

      <div className="form-footer">
        <p>ليس لديك حساب في مارس؟ <a href="/Student_signin">إنشاء حساب</a></p>
        <p><a href="/ResetPassword">نسيت كلمة المرور؟</a></p>
      </div>
    </section>
  );
}
 
export default Student_signup;
