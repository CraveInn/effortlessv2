import React from 'react';
import './TermsAndConditions.css';
import Navbar from '../components/organisms/Navbar/Navbar';

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar/>
    <div className="terms-container">
      
      <h1>Terms and Conditions</h1>
      
      <section className="terms-section">
        <h2>Payment Terms</h2>
        <ol>
          <li>A 50% upfront payment is required before work commences.</li>
          <li>The remaining 50% payment is due upon project completion and before final delivery.</li>
          <li>All prices are in Indian Rupees (₹) and are subject to applicable taxes.</li>
          <li>Payment terms for add-on services will be discussed and agreed upon separately.</li>
          <li>Recurring payments (maintenance and support) will be billed monthly in advance.</li>
        </ol>
      </section>

      <section className="terms-section">
        <h2>Terms of Service</h2>
        <ol>
          <li>Custom domain charges are separate and will be billed directly by the domain provider.</li>
          <li>Monthly maintenance and support services can be opted for at any time.</li>
          <li>Additional pages and forms can be added at any time during the project.</li>
          <li>All services are subject to availability and may require additional time for implementation.</li>
          <li>Refund policy will be discussed and agreed upon before project commencement.</li>
          <li>Project timeline will be provided after the initial payment is received.</li>
          <li>Any changes to the scope of work may affect the project timeline and cost.</li>
        </ol>
      </section>
    </div>
    </div>
  );
};

export default TermsAndConditions; 