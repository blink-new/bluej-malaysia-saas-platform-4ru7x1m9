import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PartnerPortal from './pages/PartnerPortal';
import VendorMiniSite from './pages/VendorMiniSite';
import CustomerApp from './pages/CustomerApp';
import PartnerApp from './pages/PartnerApp';
import AdminPortal from './pages/AdminPortal';
import LoginPage from './pages/LoginPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/partner" element={<PartnerPortal />} />
          <Route path="/partner-app" element={<PartnerApp />} />
          <Route path="/vendor/:vendorName" element={<VendorMiniSite />} />
          <Route path="/customer" element={<CustomerApp />} />
          <Route path="/admin" element={<AdminPortal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;