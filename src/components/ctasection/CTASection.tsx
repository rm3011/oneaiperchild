import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Shield } from 'lucide-react';
import './CTASection.css';

const CTASection: React.FC = () => {
  return (
    <section id="get-involved" className="cta-section section section-border">

      {/* Background atmosphere */}
      <div className="cta-bg-effects" aria-hidden="true">
        <div className="cta-glow cta-glow-1" />
        <div className="cta-glow cta-glow-2" />
        <div className="cta-grid-overlay" />
      </div>

      <div className="container-custom">

        {/* =========================================
            LEFT IMAGE + RIGHT CONTENT
        ========================================= */}
        <div className="cta-layout">

          {/* =====================================
              LEFT — IMAGE
          ===================================== */}
          <motion.div
            className="cta-visual"
            initial={{
              opacity: 0,
              x: -40,
              scale: 0.97,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              delay: 0.15,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="cta-image-frame">

              <img
                src="https://resize.indiatvnews.com/en/resize/oldbucket/730_-/mainnational/IndiaTv0f8108_rural.jpg"
                alt="Children learning with technology"
              />

              {/* Image gradient */}
              <div className="cta-image-overlay" />

              {/* Image glow */}
              <div className="cta-image-glow" />

            </div>


            {/* Floating information card */}
            <motion.div
              className="cta-floating-card"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.65,
                duration: 0.6,
              }}
            >

              <div className="floating-card-dot" />

              <div className="floating-card-content">
                <strong>
                  1 AI for every child
                </strong>

                <span>
                  Safe. Personal. Accessible.
                </span>
              </div>

            </motion.div>

          </motion.div>


          {/* =====================================
              RIGHT — CONTENT
          ===================================== */}
          <motion.div
            className="cta-content"
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              margin: '-80px',
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Badge */}
            <motion.div
              className="cta-badge"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.5,
              }}
            >
              <span>Join the Movement</span>
            </motion.div>


            {/* Headline */}
            <motion.h2
              className="cta-headline"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              Help us reach{' '}

              <span className="text-gradient">
                every child
              </span>
              ,

              <br />

              everywhere.
            </motion.h2>


            {/* Description */}
            <motion.p
              className="cta-description"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.3,
                duration: 0.7,
              }}
            >
              Your support turns possibility into reality.
              Together, we can give every child — regardless
              of where they live or what language they speak —
              access to a safe, personal AI companion.
            </motion.p>


            {/* Buttons */}
            <motion.div
              className="cta-buttons"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
            >

              <button
                className="cta-btn cta-btn-primary"
                type="button"
                aria-label="Donate to support our mission"
              >
                <Heart size={18} />

                <span>
                  Donate Now
                </span>

                <ArrowRight
                  size={16}
                  className="cta-btn-arrow"
                />
              </button>


              <button
                className="cta-btn cta-btn-secondary"
                type="button"
                aria-label="Partner with us"
              >
                <Users size={18} />

                <span>
                  Partner With Us
                </span>
              </button>

            </motion.div>


            {/* Trust indicators */}
            <motion.div
              className="cta-trust"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.8,
              }}
            >

              <div className="trust-item">
                <Shield size={14} />
                <span>Secure donations</span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <Heart size={14} />
                <span>100% to the mission</span>
              </div>

              <div className="trust-divider" />

              <div className="trust-item">
                <Users size={14} />
                <span>Tax-deductible</span>
              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default CTASection;