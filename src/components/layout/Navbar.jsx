import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = ['About', 'Resume', 'Projects', 'Certificates', 'Contact'];
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {tabs.map((tab) => (
          <li key={tab} className="navbar-item">
            <button 
              className={`navbar-link ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
        <li className="navbar-item theme-toggle-container">
          <button onClick={toggleTheme} className="theme-toggle-btn" title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
