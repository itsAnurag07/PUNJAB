import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import NewForms from './pages/NewForms';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Register from './pages/Register';

function App() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display min-h-screen">
      <TopBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/new-forms" element={<NewForms />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
