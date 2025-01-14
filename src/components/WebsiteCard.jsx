import React from 'react';

function WebsiteCard({ title, subtitle, description, image, backgroundColor, onClick }) {
  return (
    <div className="website-card" onClick={onClick}>
      <div className="image-container" style={{ backgroundColor }}>
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
