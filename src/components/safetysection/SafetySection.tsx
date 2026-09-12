import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  MessageSquareCode, 
  SlidersHorizontal, 
  ArrowRight 
} from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './SafetySection.css';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: 'emerald' | 'blue' | 'amber' | 'yellow';
}

const features: Feature[] = [
  {
    icon: <ShieldCheck className="feature-icon" />,
    title: 'Child-first design',
    description: 'Age-appropriate interactions and content.',
    theme: 'emerald'
  },
  {
    icon: <Lock className="feature-icon" />,
    title: 'Privacy by default',
    description: 'Minimal data. Strong encryption. Full control.',
    theme: 'blue'
  },
  {
    icon: <Users className="feature-icon" />,
    title: 'Human oversight',
    description: 'Educators and parents stay in the loop.',
    theme: 'amber'
  },
  {
    icon: <ShieldCheck className="feature-icon" />,
    title: 'Safe content',
    description: 'Advanced moderation and safety layers.',
    theme: 'yellow'
  },
  {
    icon: <MessageSquareCode className="feature-icon" />,
    title: 'Transparent AI',
    description: 'Explains its answers. Builds understanding.',
    theme: 'blue'
  },
  {
    icon: <SlidersHorizontal className="feature-icon" />,
    title: 'Parental control',
    description: 'Custom controls for peace of mind.',
    theme: 'emerald'
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
  }
};

const SafetySection: React.FC = () => {
  return (
    <section className="safety-section">
      <div className="safety-container">
        <motion.div 
          className="safety-grid-layout"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main Left Card: Safety & Trust */}
          <motion.div className="safety-card main-card" variants={cardVariants}>
            <div className="card-header">
              <div className="eyebrow-pills">
                <span className="pill-emerald">SAFE</span>
                <span className="dot">•</span>
                <span className="pill-blue">INCLUSIVE</span>
                <span className="dot">•</span>
                <span className="pill-amber">GLOBAL</span>
              </div>
              <h2 className="main-title">
                Built for safety.<br />Designed for trust.
              </h2>
            </div>

            {/* 6 Feature Grid - each with its own theme */}
            <div className="features-grid">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className={`feature-item theme-${feature.theme}`}
                >
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Inner Banner */}
            <div className="banner-strip">
              <div className="banner-left">
                <div className="banner-icon-wrapper">
                  <Lock className="banner-icon" />
                </div>
                <p className="banner-text">
                  We follow global standards for child safety and data protection.
                </p>
              </div>
              <a href="#learn-more" className="banner-link">
                Learn more <ArrowRight className="link-arrow" />
              </a>
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="right-column-stack">
            {/* Top Right Card: Image + Global Standards */}
            <motion.div className="safety-card image-card" variants={cardVariants}>
              <div className="image-container">
                <img 
                  src="https://borgenproject.org/wp-content/uploads/Girls-Education-in-India-1-840x560.jpg" 
                  alt="Children learning together" 
                  className="card-image"
                />
                <div className="image-gradient-overlay" />
              </div>
              <div className="banner-strip banner-overlay">
                <div className="banner-left">
                  <div className="banner-icon-wrapper">
                    <Lock className="banner-icon" />
                  </div>
                  <p className="banner-text">
                    We follow global standards for child safety and data protection.
                  </p>
                </div>
                <a href="#learn-more" className="banner-link">
                  Learn more <ArrowRight className="link-arrow" />
                </a>
              </div>
            </motion.div>

            {/* Bottom Right Card: Together We Can Build The Future */}
            <motion.div className="safety-card cta-card" variants={cardVariants}>
              <div className="cta-content">
                <h3 className="cta-title">
                  Together, we can<br />build the future.
                </h3>
                <p className="cta-description">
                  Join schools, educators, partners and supporters who believe every child deserves access to a personal AI for learning and growth.
                </p>
                <button className="cta-button">
                  Join the Mission <ArrowRight className="btn-arrow" />
                </button>
              </div>

              {/* Vector Illustration Container */}
              <div className="cta-illustration">
                <div className="illustration-graphic">
                  <svg viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-graphic">
                    <circle cx="50" cy="80" r="12" fill="#00d8d6"/>
                    <rect x="42" y="94" width="16" height="26" rx="8" fill="#00d8d6"/>
                    
                    <circle cx="100" cy="60" r="16" fill="#f59e0b"/>
                    <rect x="90" y="78" width="20" height="38" rx="10" fill="#f59e0b"/>
                    
                    <circle cx="150" cy="75" r="13" fill="#3b82f6"/>
                    <rect x="141" y="90" width="18" height="28" rx="9" fill="#3b82f6"/>
                    
                    <path d="M10 120 Q 100 100 190 120" stroke="#10b981" strokeWidth="6"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SafetySection;