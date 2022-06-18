import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';

const Content = () => (

    <Routes>
      <Route  path="/" element={<Home />} ></Route>
      <Route  path="/work" element={<Work />} ></Route>
      <Route  path="/about" element={<About />} ></Route>
      <Route  path="/contact" element={<Contact />} ></Route>
    </Routes>

);

export default Content;
