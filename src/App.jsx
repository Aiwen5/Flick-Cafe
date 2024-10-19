import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'; // Import Home Page
import Menu from './pages/Menu/Menu';
import Screenings from './pages/Screenings/Screenings';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/screenings" element={<Screenings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;