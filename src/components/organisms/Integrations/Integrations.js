import React from 'react';
import './Integrations.css';
import { 
  FaSalesforce, 
  FaLinkedin, 
  FaHubspot,
  FaDatabase,
  FaSync,
  FaArrowRight
} from 'react-icons/fa';
import { SiSlack } from 'react-icons/si';

const Integrations = () => {
  return (
    <section className="integrations">
      <div className="integrations-container">
        <div className="integration-flow">
          {/* Left side integrations */}
          <div className="flow-left">
            <div className="integration-icon salesforce">
              <FaSalesforce />
              <div className="connection-line"></div>
            </div>
            <div className="integration-icon slack">
              <SiSlack />
              <div className="connection-line"></div>
            </div>
            <div className="integration-icon refresh">
              <span className="icon-circle">↻</span>
              <div className="connection-line"></div>
            </div>
            <div className="integration-icon hubspot">
              <FaHubspot />
              <div className="connection-line"></div>
            </div>
            <div className="integration-icon snowflake">
              <span className="icon-circle">❄</span>
              <div className="connection-line"></div>
            </div>
          </div>

          {/* Center connect section */}
          <div className="flow-center">
            <div className="connect-section">
              <div className="connect-icon">
                <FaArrowRight />
                <span>Connect</span>
              </div>
              
              <div className="query-card">
                <div className="query-header">
                  <span className="query-icon">⚡</span>
                  <span>Show me a list of contacts that haven't signed in in the last 10 days</span>
                </div>
                <div className="contact-list">
                  <div className="contact-item">
                    <span className="contact-avatar">CH</span>
                    <span>Courtney H.</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-avatar">SN</span>
                    <span>Savannah N.</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-avatar">FM</span>
                    <span>Floyd M.</span>
                  </div>
                </div>
                <div className="database-icon">
                  <FaDatabase />
                </div>
              </div>
            </div>
          </div>

          {/* Right side sync section */}
          <div className="flow-right">
            <div className="sync-section">
              <div className="sync-icon">
                <FaSync />
                <span>Sync</span>
              </div>
              <div className="sync-targets">
                <div className="integration-icon linkedin">
                  <div className="connection-line left"></div>
                  <FaLinkedin />
                </div>
                <div className="integration-icon hubspot">
                  <div className="connection-line left"></div>
                  <FaHubspot />
                </div>
                <div className="integration-icon salesforce">
                  <div className="connection-line left"></div>
                  <FaSalesforce />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations; 