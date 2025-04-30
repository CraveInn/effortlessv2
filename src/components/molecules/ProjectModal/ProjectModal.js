import React, { useState } from 'react';
import { FaTimes, FaPhone, FaCheckCircle } from 'react-icons/fa';
import './ProjectModal.css';

const ProjectModal = ({ isOpen, onClose, onConfirm }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
      setError('Please enter a valid 10-digit phone number');
      return;
    }

    // First set submitted state to show success message
    setIsSubmitted(true);
    // Then call onConfirm with the phone number
  };

  const handleClose = () => {
    // Reset the form state when closing
    setPhoneNumber('');
    setIsSubmitted(false);
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="project-modal-overlay" onClick={handleClose} />
      <div className="project-modal-container">
        <button className="modal-close-button" onClick={handleClose}>
          <FaTimes />
        </button>
        
        {!isSubmitted ? (
          <>
            <div className="modal-icon">
              <FaPhone className="folder-icon" />
            </div>
            
            <h2>Request a Call Back</h2>
            <p className="modal-subtitle">Enter your phone number and we'll get back to you within 24 hours</p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    if (value.length <= 10) {
                      setPhoneNumber(value);
                      setError('');
                    }
                  }}
                  maxLength={10}
                  autoFocus
                />
                {error && <span className="error-message">{error}</span>}
              </div>
              
              <button type="submit" className="confirm-button">
                Request Call Back
              </button>
            </form>
          </>
        ) : (
          <div className="success-message">
            <div className="modal-icon success">
              <FaCheckCircle className="check-icon" />
            </div>
            <h2>Thank You!</h2>
            <p>Our agent will get back to you within 24 hours.</p>
            <button onClick={handleClose} className="confirm-button">
              Close
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectModal; 