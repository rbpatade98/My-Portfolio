import React, { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import Navbar from '../components/layout/Navbar';
import About from '../pages/About';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Certificates from '../pages/Certificates';
import Contact from '../pages/Contact';


const MainLayout = () => {
  const [activeTab, setActiveTab] = useState('About');

  const renderContent = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />;
      case 'Certificates':
        return <Certificates />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <main className="main-content-wrapper">
      <Sidebar />
      <div className="main-content glass-card">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <section className="content-section">
          {renderContent()}
        </section>
      </div>
    </main>
  );
};

export default MainLayout;
