import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background" aria-hidden="true">
        <img
          src="/hero-section-1.png"
          alt=""
          className="hero-image"
        />
        <div className="hero-fade-overlay" />
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text-wrapper">
            <div className="eyebrow">
              EDUCATION <span>×</span> AI <span>×</span> A BRIGHTER FUTURE
            </div>

            <h1 className="hero-heading">
              <span className="heading-line-one">ONE AI,</span>
              <span className="heading-line-two text-gradient">PER CHILD</span>
            </h1>

            <p className="hero-description">
              Every child deserves access to a safe,<br />
              personal AI that helps them learn,<br />
              explore, create and think.
            </p>

            <div className="hero-buttons">
              <a className="btn-primary-custom" href="#why-we-exist">
                Explore the Vision <ArrowRight className="btn-icon" size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;