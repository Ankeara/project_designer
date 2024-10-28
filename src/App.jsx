import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/home/Home';
import About from './components/about/About';
import Project from './components/projects/Project';
import Contact from './components/contact/Contact';
import './App.css';

function App() {
  const location = useLocation();

  const titles = {
  '/': 'Home -- Website for creator and designer',
  '/about': 'About -- Project designer',
  '/project': 'Project -- Project designer',
  '/contact': 'Project -- Project designer',
};

useEffect(() => {
  document.title = titles[location.pathname] || 'Default Title';
}, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/project" element={<Project />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
