import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

import NavbarApp from "./pages/NavbarApp";
import FooterApp from "./pages/FooterApp";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <Flowbite>
        <NavbarApp />
        <Routes>
          {/* Use Home component for the root path */}
          <Route index element={<Home />} /> 
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />          
          <Route path="privacy" element={<Privacy />} />
        </Routes>
        <FooterApp />
        </Flowbite>
    </>
  );
}

export default App;
