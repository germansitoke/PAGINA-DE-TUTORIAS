import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './src/components/Home';
import Login from './src/components/Login';
import Registro from './src/components/Registro';
import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas con el atributo element */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
