import React, { useEffect, useRef, useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, Shield, X } from 'lucide-react';
import './CTASection.css';

type InquiryType = 'donation' | 'partnership';

const CTASection: React.FC = () => {
  const [inquiryType, setInquiryType] = useState<InquiryType | null>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const activeTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!inquiryType) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    firstNameRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setInquiryType(null);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
      activeTriggerRef.current?.focus();
    };
  }, [inquiryType]);

  const openInquiryForm = (
    type: InquiryType,
    trigger: HTMLButtonElement
  ) => {
    activeTriggerRef.current = trigger;
    setInquiryType(type);
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inquiryType) return;

    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get('firstName') ?? '');
    const lastName = String(formData.get('lastName') ?? '');
    const email = String(formData.get('email') ?? '');
    const subject = inquiryType === 'donation'
      ? 'Donation inquiry'
      : 'Partnership inquiry';
    const body = [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Inquiry: ${subject}`
    ].join('\n');

    window.location.href = `mailto:info@nevas.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="get-involved" className="cta-section section section-border">
      {/* Ambient background */}
      <div className="cta-bg-effects" aria-hidden="true">
        <div className="cta-glow cta-glow-1" />
        <div className="cta-glow cta-glow-2" />
        <div className="cta-grid-overlay" />
      </div>

      <div className="container-custom">
        <div className="cta-layout">
          {/* ---------- LEFT: image ---------- */}
          <motion.div
            className="cta-visual"
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="cta-image-frame">
              <img
                src="https://resize.indiatvnews.com/en/resize/oldbucket/730_-/mainnational/IndiaTv0f8108_rural.jpg"
                alt="Children learning with technology"
              />
              <div className="cta-image-overlay" />
              <div className="cta-image-glow" />
            </div>

            <motion.div
              className="cta-floating-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              <div className="floating-card-dot" />
              <div className="floating-card-content">
                <strong>1 AI for every child</strong>
                <span>Safe. Personal. Accessible.</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ---------- RIGHT: content ---------- */}
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="cta-badge"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <span>Join the Movement</span>
            </motion.div>

            <motion.h2
              className="cta-headline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Help us reach <span className="text-gradient">every child</span>,
              <br />
              everywhere.
            </motion.h2>

            <motion.p
              className="cta-description"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Your support turns possibility into reality. Together, we can give
              every child — regardless of where they live or what language they
              speak — access to a safe, personal AI companion.
            </motion.p>

            <motion.div
              className="cta-buttons"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <button
                type="button"
                className="cta-btn cta-btn-primary"
                aria-label="Donate to support our mission"
                onClick={(event) => openInquiryForm('donation', event.currentTarget)}
              >
                <Heart size={18} />
                <span>Donate Now</span>
                <ArrowRight size={16} className="cta-btn-arrow" />
              </button>

              <button
                type="button"
                className="cta-btn cta-btn-secondary"
                aria-label="Partner with us"
                onClick={(event) => openInquiryForm('partnership', event.currentTarget)}
              >
                <Users size={18} />
                <span>Partner With Us</span>
              </button>
            </motion.div>

            <motion.div
              className="cta-trust"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.8 }}
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

      {inquiryType && (
        <div className="cta-form-backdrop">
          <button
            type="button"
            className="cta-form-backdrop-button"
            aria-label="Close contact form"
            onClick={() => setInquiryType(null)}
          />
          <div
            className="cta-inquiry-form"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cta-inquiry-title"
          >
            <div className="cta-form-heading">
              <div>
                <span className="cta-form-eyebrow">GET IN TOUCH</span>
                <h2 id="cta-inquiry-title">
                  {inquiryType === 'donation' ? 'Support the mission' : 'Partner with us'}
                </h2>
                <p>Share your details and we’ll help you take the next step.</p>
              </div>
              <button
                type="button"
                className="cta-form-close"
                aria-label="Close contact form"
                onClick={() => setInquiryType(null)}
              >
                <X size={20} />
              </button>
            </div>

            <form className="cta-inquiry-fields" onSubmit={submitInquiry}>
              <div className="cta-form-name-fields">
                <label>
                  First name
                  <input
                    ref={firstNameRef}
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    required
                  />
                </label>
                <label>
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    required
                  />
                </label>
              </div>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                />
              </label>
              <p className="cta-form-note">
                Continuing opens a pre-filled email to info@nevas.ai for you to review and send.
              </p>
              <button type="submit" className="cta-btn cta-btn-primary cta-form-submit">
                Continue to email <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CTASection;