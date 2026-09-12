import React from 'react';
import { BookOpen, Telescope, Pencil, Brain, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import './Content.css';

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  theme: 'yellow' | 'blue' | 'emerald' | 'amber';
}

const steps: Step[] = [
  {
    number: '01',
    title: 'LEARN',
    description: 'Understand concepts in your own language and at your own pace.',
    icon: <BookOpen className="step-icon" />,
    theme: 'yellow'
  },
  {
    number: '02',
    title: 'EXPLORE',
    description: 'Ask questions. Discover new ideas. Follow your curiosity.',
    icon: <Telescope className="step-icon" />,
    theme: 'blue'
  },
  {
    number: '03',
    title: 'THINK',
    description: 'Reflect on what you know. Analyze information. Make connections.',
    icon: <Brain className="step-icon" />,
    theme: 'emerald'
  },
  {
    number: '04',
    title: 'CREATE',
    description: 'Express your ideas. Build projects. Solve real problems.',
    icon: <Pencil className="step-icon" />,
    theme: 'amber'
  }
];

// Container animation logic to stagger children sequentially
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // Time gap between each step reveal
    }
  }
};

// Item reveal animation (slide in from left + fade in)
const stepItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -40 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 1, 0.5, 1] // Custom smooth cubic-bezier easing
    } 
  }
};

// Connecting arrow reveal animation
const arrowVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scaleX: 0 
  },
  visible: { 
    opacity: 0.7, 
    scaleX: 1,
    transition: { 
      duration: 0.4, 
      ease: "easeOut" 
    } 
  }
};

const Content = () => {
  return (
    <section id="who-we-are" className="how-it-works-section section">
      <div className="container-custom">
        {/* Header with entrance animation */}
        <motion.div 
          className="how-it-works-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="header-left">
            <div className="eyebrow">OUR APPROACH</div>
            <h2 className="how-it-works-title">How it works</h2>
          </div>
          <div className="header-right">
            <p className="header-subtitle">
              A simple learning journey, powered by AI and guided by educators.
            </p>
          </div>
        </motion.div>

        {/* Staggered Step Flow Container */}
        <motion.div 
          className="how-it-works-flow"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of element is visible
        >
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Animated Step Card */}
              <motion.div 
                className={`step-item theme-${step.theme}`}
                variants={stepItemVariants}
              >
                {/* Circular Icon Container */}
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Number */}
                <div className="step-title-group">
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>

                {/* Description */}
                <p className="step-description">{step.description}</p>
              </motion.div>

              {/* Animated Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div 
                  className="step-arrow-container"
                  variants={arrowVariants}
                  style={{ transformOrigin: "left center" }}
                >
                  <ArrowRight className="step-arrow" />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Content;