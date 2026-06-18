import React, { useState } from "react";
import { Mail, Phone, MapPin, Download, ChevronDown, ChevronUp } from "lucide-react";
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
} from "../common/BrandIcons";
import avatar from "../../assets/avatar-ram.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="sidebar glass-card">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt="Ram Patade" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Ram Patade">
            Ramchandra Patade
          </h1>
          <p className="title">Software Developer</p>
        </div>

        <button className="info_more-btn" onClick={() => setIsOpen(!isOpen)}>
          <span>{isOpen ? "Hide Contacts" : "Show Contacts"}</span>
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <div className={`sidebar-info_more ${isOpen ? "active" : ""}`}>
        <div className="separator"></div>

        <ul className="contacts-list">
          <ContactItem
            icon={<Mail size={18} />}
            title="Email"
            value="rbpatade98@gmail.com"
            link="mailto:rbpatade98@gmail.com"
          />
          <ContactItem
            icon={<Phone size={18} />}
            title="Phone"
            value="+91 9004571431"
            link="tel:+919004571431"
          />
          <ContactItem
            icon={<MapPin size={18} />}
            title="Location"
            value="Mumbai, India"
          />
        </ul>

        <div className="separator"></div>

        <div className="resume-download">
          <a
            href="/resume.pdf"
            download="Ram-Patade-Resume.pdf"
            className="download-btn transition-all"
          >
            <div className="icon-box">
              <Download size={18} />
            </div>
            <span>Download Resume</span>
          </a>
        </div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <Twitter size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <Linkedin size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <Youtube size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <Github size={18} />
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              <Instagram size={18} />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

const ContactItem = ({ icon, title, value, link }) => (
  <li className="contact-item">
    <div className="icon-box">{icon}</div>
    <div className="contact-info">
      <p className="contact-title">{title}</p>
      {link ? (
        <a href={link} className="contact-link">
          {value}
        </a>
      ) : (
        <address>{value}</address>
      )}
    </div>
  </li>
);

export default Sidebar;
