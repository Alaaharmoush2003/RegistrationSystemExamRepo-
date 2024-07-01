// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Css/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Add email state
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5171/api/auth/register', { username, email, password });
      if (response.data) {
        setMessage('Registration successful.');
      } else {
        setMessage('Unexpected response from the server.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setMessage(error.response.data);
      } else {
        setMessage('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Register</h2>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button">Register</button>
        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
};

export default Register;
