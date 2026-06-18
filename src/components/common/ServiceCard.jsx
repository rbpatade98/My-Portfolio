import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        {icon}
      </div>
      <div className="service-content-box">
        <h4 className="service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
