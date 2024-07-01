import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Css/Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5171/api/auth/login', { username, password });
            if (response.data) {
                setMessage('Login successful!');
                localStorage.setItem('username', username); // Store the username
                navigate('/user-dashboard');
            } else {
                setMessage('Unexpected response from the server.');
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setMessage('Login failed. Please check your credentials or ensure your account is approved.');
            } else {
                setMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
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
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                {message && <p className="message">{message}</p>}
            </form>
            <button className="register-button" onClick={() => navigate('/register')}>Register</button>
            <p className="admin-link">
                You are an Admin? <Link to="/admin-login">Login Here</Link>
            </p>
        </div>
    );
};

export default Login;
