import React from 'react';
import { useNavigate } from 'react-router-dom';
import UsersList from './UsersList';
import '../css/Landing.css';

function Landing() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();

  if (!user) {
    navigate('/');
    return null;
  }

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/');
  };

  const goToAddUser = () => {
    navigate('/add-user');
  };

  return (
    <div className="landing-container">
      <header className="header">
        <h2>Welcome, {user.email}</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
          </ul>
        </nav>
        <main className="main">
          <h3>User List</h3>
          <button className="add-user-btn" onClick={goToAddUser}>Add User</button>
          <UsersList />
        </main>
      </div>
    </div>
  );
}

export default Landing;
