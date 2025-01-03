import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import SupplierDashboard from './pages/SupplierDashboard/SupplierDashboard';
import OrderDetails from './pages/OrderDetails/OrderDetails';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<SupplierDashboard />} />
        <Route path="/order/:orderId" element={<OrderDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
