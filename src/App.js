import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import HomePage from './pages/HomePage';  // Import the HomePage component


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />  {/* Render HomePage component */}
        <Route path="/about-us" element={<div>About Us Page</div>} />
        <Route path="/features" element={<div>Features Page</div>} />
        <Route path="/pricing" element={<div>Our Pricing</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/contact-us" element={<div>Contact Us</div>} />
        <Route path="/login" element={<div>Login</div>} />
        <Route path="/register" element={<div>Register</div>} />
      </Routes>
    </Router>
  );
};

export default App;
