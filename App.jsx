import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Landing from './components/Landing';
import AddUser from './components/AddUser';
import UserData from './components/UserData';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/user-data" element={<UserData />} />
      </Routes>
    </Router>
  );
}

export default App;
