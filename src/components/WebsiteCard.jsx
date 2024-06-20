import React from 'react';

function WebsiteCard({ title, subtitle, description, image }) {
  return (
    <div className="website-card">
      <div className="image-container">
        <img src={image} alt="Website" className="website-image" />
      </div>
      <div className="website-info">
        <h2 className="website-title">{title}</h2>
        <h3 className="website-subtitle">{subtitle}</h3>
        <p className="website-description">{description}</p>
      </div>
    </div>
  );
};

export default WebsiteCard;
