import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Css/AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5171/api/auth/admin-login', { username, password });
            if (response.data) {
                setMessage('Login successful!');
                localStorage.setItem('adminUsername', username); // Store the admin username
                navigate('/admin-dashboard');
            } else {
                setMessage('Unexpected response from the server.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setMessage(error.response.data);
            } else {
                setMessage('Login failed. Please try again.');
            }
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Admin Login</h2>
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
        </div>
    );
};

export default AdminLogin;
