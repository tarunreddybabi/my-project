import React, { useRef } from 'react';
import { Link } from 'react-router-dom';


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
    <div style={styles.registerContainer}>
    <h2 style={styles.header}>Register Page</h2>
    <form onSubmit={handleRegister} style={styles.form}>
      <div style={styles.formGroup}>
        <label htmlFor="username" style={styles.label}>Username:</label>
        <input type="text" id="username" ref={usernameRef} style={styles.input} required />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="password" style={styles.label}>Password:</label>
        <input type="password" id="password" ref={passwordRef} style={styles.input} required />
      </div>
      <button type="submit" style={styles.button}>Register</button>
    </form><br/>
    <p style={styles.loginLink}>Already have an account?<br/> <Link to="/"><b>Login here</b></Link></p>
  </div>
);
};

const styles = {
registerContainer: {
  maxWidth: '400px',
  height:'400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: '#bde0fe',
},
header: {
  marginBottom: '20px',
  textAlign: 'center',
  fontWeight:'bolder',
  fontSize:'26px',
},
formGroup: {
  marginBottom: '15px',
},
label: {
  display: 'block',
  marginBottom: '5px',
  fontWeight:'bold'
},
input: {
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '3px',
},
button: {
  width: '100%',
  padding: '10px',
  backgroundColor: '#28a745',
  color: '#fff',
  border: 'none',
  borderRadius: '3px',
  cursor: 'pointer',
},
loginLink:{
  textAlign:'center',
}
};

export default RegisterForm;
