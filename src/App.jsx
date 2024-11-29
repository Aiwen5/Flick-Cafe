import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Screenings from './pages/Screenings/Screenings';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import Footer from './components/Footer/Footer';
import Reviews from './pages/Reviews/Reviews';
import { useState } from 'react';
import './App.css';

function App() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <div className="App">
      <Header {...{setOverlayOpen}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu {...{overlayOpen, setOverlayOpen}} />} />
        <Route path="/screenings" element={<Screenings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;