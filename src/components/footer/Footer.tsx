import React, { useState } from 'react';
import { Send } from 'lucide-react';
import './Footer.css';

// X (Twitter) Custom SVG Icon
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Handle subscription logic
      console.log('Subscribed with:', email);
      setEmail('');
    }
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand & Logo Column */}
          <div className="footer-brand">
            <div className="brand-logo-wrapper">
              <img src="/logo-2.3.png" alt="1A1C Logo" className="brand-logo-img" />
            </div>
            <h3 className="brand-title">1A1C</h3>
            <p className="brand-tagline">
              Learn <span>•</span> Explore <span>•</span> Think <span>•</span> Create
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="footer-links-grid">
            <div className="link-column">
              <h4 className="column-title">EXPLORE</h4>
              <ul className="link-list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#educators">For Educators</a></li>
                <li><a href="#impact">Impact</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">GET INVOLVED</h4>
              <ul className="link-list">
                <li><a href="#partner">Partner With Us</a></li>
                <li><a href="#donate">Donate</a></li>
                <li><a href="#volunteer">Volunteer</a></li>
                <li><a href="#resources">Resources</a></li>
              </ul>
            </div>

            <div className="link-column">
              <h4 className="column-title">SUPPORT</h4>
              <ul className="link-list">
                <li><a href="#faqs">FAQs</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="footer-newsletter">
            <h4 className="column-title">STAY CONNECTED</h4>
            <p className="newsletter-text">
              Get updates on our journey and how you can help.
            </p>
            
            <form onSubmit={handleSubmit} className="newsletter-form">
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send className="send-icon" />
                </button>
              </div>
            </form>

            {/* Social Icons */}
            <div className="social-links">
              <a href="#twitter" aria-label="X (Twitter)"><XIcon /></a>
              <a href="#linkedin" aria-label="LinkedIn"><LinkedinIcon /></a>
              <a href="#youtube" aria-label="YouTube"><YoutubeIcon /></a>
              <a href="#instagram" aria-label="Instagram"><InstagramIcon/></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom">
          <p>© 2025 One Child, One AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;