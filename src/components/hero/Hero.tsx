import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-image-container">
          <img 
            src="/hero-section-1.png" 
            alt="AI and education hero visual" 
            className="hero-image"
          />
          <div className="hero-fade-overlay"></div>
        </div>
      </div>
      
      <div className="hero-container">
        <div className="hero-content-wrapper">
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
              <button className="btn-primary-custom" type="button">
                Explore the Vision <ArrowRight className="btn-icon" size={18} />
              </button>
              <button className="btn-secondary-custom" type="button">
                Watch the Story <Play className="btn-icon" size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;