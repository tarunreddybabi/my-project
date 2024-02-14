import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './register.css'; 

const RegisterForm = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegister = (event) => {
    event.preventDefault();

    const newUser = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    localStorage.setItem('userData', JSON.stringify(newUser));

    usernameRef.current.value = '';
    passwordRef.current.value = '';

    alert('Registration Successful!');
  };

  return (
    <div className="register-container">
      <h2>Register Page</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/">Login here</Link></p>
    </div>
  );
};

export default RegisterForm;
