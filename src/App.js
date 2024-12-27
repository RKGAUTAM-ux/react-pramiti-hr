import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from './pages/HomePage';  // Import the HomePage component
import AboutPage from './pages/AboutPage';  // Import the HomePage component
import FeaturesPage from './pages/FeaturesPage';  // Import the HomePage component

const App = () => {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Render HomePage component */}
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<div>Our Pricing</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
          <Route path="/contact-us" element={<div>Contact Us</div>} />
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/register" element={<div>Register</div>} />
        </Routes>
      <Footer />
    </Router>
  );
};

export default App;
