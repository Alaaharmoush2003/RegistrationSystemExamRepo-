import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import HelloWorld from './components/HelloWorld';
import UserDashboard from './components/UserDashboard';
import AdminLogin from './components/AdminLogin';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/admin-dashboard" element={<AdminDashboard />} />
                    <Route path="/hello-world" element={<HelloWorld />} />
                    <Route path="/admin-login" element={<AdminLogin />} />
                    <Route path="/user-dashboard" element={<UserDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
