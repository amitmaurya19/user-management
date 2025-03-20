import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    console.log("Stored username:", storedUsername);
    if (!storedUsername) {
      navigate('/login');
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/login');
  };

  // Get the first letter of the username for the avatar
  const firstLetter = username ? username.charAt(0).toUpperCase() : '';

  return (
    <div className="dashboard-container">
      <div className="card">
        {/* User info at the top */}
        <div className="user-info">
          <div className="avatar">{firstLetter}</div>
          <div className="username">{username}</div>
        </div>
        <h2>Welcome to your dashboard!</h2>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
