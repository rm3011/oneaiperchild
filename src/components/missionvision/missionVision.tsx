import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  Heart,
  Eye,
  Compass,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import './missionVision.css';

type TabType = 'promise' | 'vision' | 'mission' | 'values';
type ThemeType = 'yellow' | 'blue' | 'emerald' | 'amber';

interface ThemeConfig {
  color: string;
  soft: string;
  border: string;
  glow: string;
  cardStart: string;
  cardEnd: string;
}

interface TabContent {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  headline: string;
  description: string;
  points: string[];
  theme: ThemeType;
}

/* =========================================================
   THEME CONFIGURATION
   ========================================================= */

const themes: Record<ThemeType, ThemeConfig> = {
  yellow: {
    color: '#facc15',
    soft: 'rgba(250, 204, 21, 0.08)',
    border: 'rgba(250, 204, 21, 0.30)',
    glow: 'rgba(250, 204, 21, 0.15)',
    cardStart: 'rgba(40, 38, 10, 0.95)',
    cardEnd: 'rgba(2, 15, 21, 0.98)'
  },

  blue: {
    color: '#0091ff',
    soft: 'rgba(0, 145, 255, 0.08)',
    border: 'rgba(0, 145, 255, 0.30)',
    glow: 'rgba(0, 145, 255, 0.15)',
    cardStart: 'rgba(8, 25, 45, 0.95)',
    cardEnd: 'rgba(2, 15, 21, 0.98)'
  },

  emerald: {
    color: '#10b981',
    soft: 'rgba(16, 185, 129, 0.08)',
    border: 'rgba(16, 185, 129, 0.30)',
    glow: 'rgba(16, 185, 129, 0.15)',
    cardStart: 'rgba(10, 40, 35, 0.95)',
    cardEnd: 'rgba(2, 15, 21, 0.98)'
  },

  amber: {
    color: '#f59e0b',
    soft: 'rgba(245, 158, 11, 0.08)',
    border: 'rgba(245, 158, 11, 0.30)',
    glow: 'rgba(245, 158, 11, 0.15)',
    cardStart: 'rgba(40, 28, 8, 0.95)',
    cardEnd: 'rgba(2, 15, 21, 0.98)'
  }
};

/* =========================================================
   TAB CONTENT
   ORDER:
   YELLOW → BLUE → EMERALD → AMBER
   ========================================================= */

const tabs: TabContent[] = [
  {
    id: 'promise',
    label: 'Our Promise',
    icon: <Sparkles className="tab-icon" size={18} />,
    headline:
      'A commitment to every family who trusts us with their child',
    description:
      'We promise to remain open, accountable, and endlessly curious. As AI evolves, so will our commitment to protecting, empowering, and inspiring the next generation of thinkers.',
    points: [
      'Continuous improvement guided by real feedback',
      'No dark patterns, no addictive design',
      'Parents and educators always in control',
      'A safer, kinder future powered by thoughtful AI'
    ],
    theme: 'yellow'
  },

  {
    id: 'vision',
    label: 'Our Vision',
    icon: <Eye className="tab-icon" size={18} />,
    headline:
      'A world where every child can learn, explore, create, and think without limits',
    description:
      "We envision a future where AI bridges educational gaps, celebrates every child's unique potential, and becomes a trusted companion in their journey of discovery.",
    points: [
      'Equal access to quality education globally',
      'AI that enhances creativity and critical thinking',
      'A generation of independent, curious learners',
      'Technology that strengthens human connection'
    ],
    theme: 'blue'
  },

  {
    id: 'mission',
    label: 'Our Mission',
    icon: <Heart className="tab-icon" size={18} />,
    headline:
      'To ensure every child has access to a safe, personal AI companion',
    description:
      'We believe that technology should empower, not overwhelm. Our mission is to create AI that grows with each child — adapting to their pace, language, and curiosity.',
    points: [
      'Personalized learning journeys for every child',
      'Safe and transparent AI interactions',
      'Support for 50+ languages and dialects',
      'Built with educators, parents, and child psychologists'
    ],
    theme: 'emerald'
  },

  {
    id: 'values',
    label: 'Our Values',
    icon: <Compass className="tab-icon" size={18} />,
    headline:
      'The principles that guide every decision we make',
    description:
      'We build with intention. Every feature, every interaction, and every line of code is shaped by the belief that children deserve technology designed with care, respect, and wonder.',
    points: [
      'Child-first design in every detail',
      'Transparency in how our AI thinks and learns',
      'Privacy and safety are non-negotiable',
      'Inclusivity across cultures, languages, and abilities'
    ],
    theme: 'amber'
  }
];

/* =========================================================
   FRAMER MOTION
   ========================================================= */

const sectionVariants: Variants = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15
    }
  }
};

const headerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
    filter: 'blur(4px)'
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
    filter: 'blur(6px)'
  },

  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.34, 1.56, 0.64, 1]
    }
  },

  exit: {
    opacity: 0,
    x: -30,
    filter: 'blur(6px)',
    transition: {
      duration: 0.4,
      ease: 'easeIn'
    }
  }
};

const listVariants: Variants = {
  hidden: {
    opacity: 0
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2
    }
  }
};

const listItemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

const orbVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

/* =========================================================
   COMPONENT
   ========================================================= */

const MissionVision: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<TabType>('promise');

  const activeContent =
    tabs.find((tab) => tab.id === activeTab)!;

  const activeTheme = themes[activeContent.theme];

  return (
    <section
      id="what-we-do"
      className={`mission-vision-section section section-border mv-section-${activeContent.theme}`}
    >

      {/* =====================================================
          BACKGROUND ORBS
          Only the active theme orb is visible
          ===================================================== */}

      <motion.div
        className={`mv-orb mv-orb-yellow ${
          activeContent.theme === 'yellow' ? 'active' : ''
        }`}
        style={{
          background: `radial-gradient(
            circle,
            rgba(250, 204, 21, 0.18) 0%,
            transparent 70%
          )`
        }}
        variants={orbVariants}
        animate="animate"
      />

      <motion.div
        className={`mv-orb mv-orb-blue ${
          activeContent.theme === 'blue' ? 'active' : ''
        }`}
        style={{
          background: `radial-gradient(
            circle,
            rgba(0, 145, 255, 0.16) 0%,
            transparent 70%
          )`
        }}
        variants={orbVariants}
        animate="animate"
      />

      <motion.div
        className={`mv-orb mv-orb-emerald ${
          activeContent.theme === 'emerald' ? 'active' : ''
        }`}
        style={{
          background: `radial-gradient(
            circle,
            rgba(16, 185, 129, 0.16) 0%,
            transparent 70%
          )`
        }}
        variants={orbVariants}
        animate="animate"
      />

      <motion.div
        className={`mv-orb mv-orb-amber ${
          activeContent.theme === 'amber' ? 'active' : ''
        }`}
        style={{
          background: `radial-gradient(
            circle,
            rgba(245, 158, 11, 0.15) 0%,
            transparent 70%
          )`
        }}
        variants={orbVariants}
        animate="animate"
      />

      <div className="container-custom">

        <motion.div
          className="mv-container"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: '-100px'
          }}
        >

          {/* =================================================
              HEADER
              ================================================= */}

          <motion.div
            className="mv-header"
            variants={headerVariants}
          >

            <div
              className="eyebrow"
              style={{
                color: activeTheme.color
              }}
            >
              PURPOSE &amp; DIRECTION
            </div>

            <h2 className="mv-title">
              Why We{' '}
              <span
                className="mv-theme-text"
                style={{
                  color: activeTheme.color
                }}
              >
                Exist
              </span>
            </h2>

            <p className="mv-subtitle">
              Every decision we make is guided by a simple belief:
              technology should serve humanity, not the other way around.
            </p>

          </motion.div>

          {/* =================================================
              MAIN CARD
              ================================================= */}

          <div
            className="mv-card"
            style={{
              background: `linear-gradient(
                145deg,
                ${activeTheme.cardStart},
                ${activeTheme.cardEnd}
              )`,
              borderColor: activeTheme.border,
              boxShadow: `
                0 0 0 1px ${activeTheme.soft},
                0 0 40px ${activeTheme.glow},
                0 10px 40px rgba(0, 0, 0, 0.4)
              `
            }}
          >

            {/* =================================================
                TAB NAVIGATION
                ================================================= */}

            <div
              className="mv-tabs"
              role="tablist"
              aria-label="Mission, Vision, Values, and Promise tabs"
            >

              {tabs.map((tab) => {
                const theme = themes[tab.theme];
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${tab.id}`}
                    id={`tab-${tab.id}`}
                    className={`mv-tab ${
                      isActive ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                    style={{
                      color: isActive
                        ? theme.color
                        : undefined,

                      backgroundColor: isActive
                        ? theme.soft
                        : undefined,

                      borderColor: isActive
                        ? theme.border
                        : undefined
                    }}
                  >

                    {tab.icon}

                    <span>
                      {tab.label}
                    </span>

                  </button>
                );
              })}

            </div>

            {/* =================================================
                TAB CONTENT
                ================================================= */}

            <div className="mv-content-wrapper">

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeTab}
                  id={`panel-${activeTab}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${activeTab}`}
                  className="mv-content"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >

                  {/* =========================================
                      LEFT CONTENT
                      ========================================= */}

                  <div className="mv-content-main">

                    <div
                      className="mv-content-badge"
                      style={{
                        color: activeTheme.color,
                        backgroundColor: activeTheme.soft,
                        borderColor: activeTheme.border
                      }}
                    >
                      {activeContent.icon}

                      <span>
                        {activeContent.label}
                      </span>
                    </div>

                    <h3 className="mv-content-headline">
                      {activeContent.headline}
                    </h3>

                    <p className="mv-content-description">
                      {activeContent.description}
                    </p>

                  </div>

                  {/* =========================================
                      RIGHT CONTENT
                      ========================================= */}

                  <div className="mv-content-points">

                    <motion.ul
                      className="mv-points-list"
                      variants={listVariants}
                      initial="hidden"
                      animate="visible"
                    >

                      {activeContent.points.map(
                        (point, index) => (
                          <motion.li
                            key={index}
                            className="mv-point-item"
                            variants={listItemVariants}
                            style={{
                              '--mv-point-color':
                                activeTheme.color,
                              '--mv-point-border':
                                activeTheme.border,
                              '--mv-point-glow':
                                activeTheme.glow
                            } as React.CSSProperties}
                          >

                            <span
                              className="point-marker"
                              style={{
                                background:
                                  activeTheme.color
                              }}
                            >
                              <ArrowRight
                                size={12}
                              />
                            </span>

                            <span className="point-text">
                              {point}
                            </span>

                          </motion.li>
                        )
                      )}

                    </motion.ul>

                  </div>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

          {/* =================================================
              BOTTOM ACCENT
              ================================================= */}

          <motion.div
            className="mv-accent-line"
            style={{
              background: `linear-gradient(
                90deg,
                transparent,
                ${activeTheme.color},
                transparent
              )`
            }}
            initial={{
              scaleX: 0,
              opacity: 0
            }}
            whileInView={{
              scaleX: 1,
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.34, 1.56, 0.64, 1]
            }}
          />

        </motion.div>

      </div>

    </section>
  );
};

export default MissionVision;