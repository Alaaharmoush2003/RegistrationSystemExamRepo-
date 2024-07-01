import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Css/AdminDashboard.css';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:5171/api/admin/unapproved-users');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users', error);
        }
    };

    const handleApproval = async (userId, approve) => {
        try {
            await axios.post(`http://localhost:5171/api/admin/approve-user/${userId}`, { approve });
            fetchUsers(); // Refresh the user list
        } catch (error) {
            console.error('Error updating user approval', error);
        }
    };

    return (
        <div className="admin-dashboard-container">
            <h2>Admin Dashboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => handleApproval(user.id, true)}>Approve</button>
                                <button onClick={() => handleApproval(user.id, false)}>Reject</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminDashboard;
