import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom'; 


const LoginScreen = ({ setLoggedIn }) => {
  const [error, setError] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = (event) => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    const userData = JSON.parse(localStorage.getItem('userData'));

    if (userData && userData.username === username && userData.password === password) {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div>
      <h2 className='header'>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" ref={usernameRef} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" ref={passwordRef} required />
        </div>
        {error && <div className="error">{error}</div>}
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <br/> <Link to="/register">Register here</Link></p>
    </div>
  );
};

export default LoginScreen;
