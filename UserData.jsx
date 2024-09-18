import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserData() {
  const navigate = useNavigate();
  const userData = JSON.parse(sessionStorage.getItem('userData'));

  const handleLogout = () => {
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('userData');
    navigate('/');
  };

  if (!userData) {
    navigate('/');
    return null;
  }

  return (
    <div>
      <h2>Submitted User Data</h2>
      <ul>
        <li><strong>First Name:</strong> {userData.firstName}</li>
        <li><strong>Last Name:</strong> {userData.lastName}</li>
        <li><strong>Mobile Number:</strong> {userData.mobileNumber}</li>
        <li><strong>Enrolment Date:</strong> {userData.enrolmentDate}</li>
        <li><strong>Native Place:</strong> {userData.nativePlace}</li>
        <li><strong>Areas of Interest:</strong> {userData.areasOfInterest.join(', ')}</li>
        <li><strong>Gender:</strong> {userData.gender}</li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserData;
