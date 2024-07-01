import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {
    const username = localStorage.getItem('username'); // Retrieve the username
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('username'); // Remove the username from local storage
        navigate('/login'); // Redirect to login page
    };

    return (
        <div>
            <h1>Welcome {username} to our team!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default UserDashboard;
