import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-title">
        <h1>Let's Work Together</h1>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p>monikabahuguna@jklu.edu.in</p>
        </div>
        <div className="contact-item">
          <h3>Address</h3>
          <p>JK Lakshmipat University</p>
        </div>
        <div className="contact-item">
          <h3>Contact number</h3>
          <p>8905120460</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
