import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/ MainContent';
import Aside from './components/Aside';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('latestPosts');

  const handleMenuClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="app">
      <Header handleMenuClick={handleMenuClick} />
      <MainContent activeSection={activeSection} />
      <MainContent about={activeSection} />
      <Aside />
      <Footer />
    </div>
  );
};

export default App;