import React, { useLayoutEffect, useRef } from 'react';
import {
  ShieldCheck,
  Lock,
  Users,
  MessageSquareCode,
  SlidersHorizontal
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SafetySection.css';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <ShieldCheck className="feature-icon" />,
    title: 'Child-first design',
    description: 'Age-appropriate interactions and content.'
  },
  {
    icon: <Lock className="feature-icon" />,
    title: 'Privacy by default',
    description: 'Minimal data. Strong encryption. Full control.'
  },
  {
    icon: <Users className="feature-icon" />,
    title: 'Human oversight',
    description: 'Educators and parents stay in the loop.'
  },
  {
    icon: <ShieldCheck className="feature-icon" />,
    title: 'Safe content',
    description: 'Advanced moderation and safety layers.'
  },
  {
    icon: <MessageSquareCode className="feature-icon" />,
    title: 'Transparent AI',
    description: 'Clear answers that build understanding.'
  },
  {
    icon: <SlidersHorizontal className="feature-icon" />,
    title: 'Parental controls',
    description: 'Flexible settings for peace of mind.'
  }
];

const SafetySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !sectionRef.current
      ) return;

      const ground = sectionRef.current.querySelector<SVGPathElement>('.safety-ground');
      const groundLength = ground?.getTotalLength() ?? 0;
      if (ground && groundLength > 0) {
        gsap.set(ground, {
          strokeDasharray: groundLength,
          strokeDashoffset: groundLength
        });
      }

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play reverse play reverse'
        }
      });

      animation
        .from('.safety-copy', {
          autoAlpha: 0,
          x: -28,
          duration: 0.6,
          ease: 'power3.out'
        })
        .from('.safety-image-frame', {
          autoAlpha: 0,
          x: 38,
          scale: 0.97,
          duration: 0.75,
          ease: 'power3.out'
        }, '-=0.35')
        .from('.feature-item', {
          autoAlpha: 0,
          x: -18,
          duration: 0.38,
          stagger: 0.08,
          ease: 'power2.out'
        }, '-=0.25')
        .from('.safety-figure--left', {
          autoAlpha: 0,
          x: -54,
          scale: 0.78,
          transformOrigin: '50% 100%',
          duration: 0.55,
          ease: 'power3.out'
        }, '-=0.15')
        .from('.safety-figure--center', {
          autoAlpha: 0,
          y: 34,
          scale: 0.82,
          transformOrigin: '50% 100%',
          duration: 0.5,
          ease: 'power3.out'
        }, '-=0.38')
        .from('.safety-figure--right', {
          autoAlpha: 0,
          x: 54,
          scale: 0.78,
          transformOrigin: '50% 100%',
          duration: 0.55,
          ease: 'power3.out'
        }, '-=0.38')
        .fromTo(
          '.safety-ground',
          { strokeDashoffset: groundLength },
          {
            strokeDashoffset: 0,
            duration: 0.55,
            ease: 'power2.inOut'
          },
          '-=0.25'
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section id="safety" className="safety-section" ref={sectionRef}>
      <div className="safety-container">
        <div className="safety-layout">
          <div className="safety-copy">
            <div className="safety-eyebrow">
              <ShieldCheck size={16} aria-hidden="true" />
              SAFETY, BUILT IN
            </div>
            <h2 className="safety-title">
              A safer space
              <span>to grow.</span>
            </h2>
            <p className="safety-intro">
              Children deserve room to explore and the reassurance of thoughtful
              safeguards around every step.
            </p>

            <div className="features-grid">
              {features.map((feature) => (
                <article className="feature-item" key={feature.title}>
                  <div className="feature-icon-wrapper" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div className="feature-text">
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-desc">{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="safety-footnote">
              <Lock size={15} aria-hidden="true" />
              <span>Privacy and child safety are non-negotiable.</span>
            </p>
          </div>

          <figure className="safety-image-frame">
            <img
              src="https://borgenproject.org/wp-content/uploads/Girls-Education-in-India-1-840x560.jpg"
              alt="Girls learning together in a classroom"
              className="safety-image"
            />
            <div className="safety-image-shade" aria-hidden="true" />
            <figcaption className="safety-image-caption">
              <span>Safe by design</span>
              <strong>Confidence to explore. Support at every step.</strong>
            </figcaption>

            <svg
              className="safety-community"
              viewBox="0 0 360 180"
              fill="none"
              aria-hidden="true"
            >
              <g className="safety-figure safety-figure--left" fill="#35E5B2">
                <circle cx="72" cy="58" r="20" />
                <path d="M37 145v-30a35 35 0 0 1 70 0v30H37Z" />
              </g>
              <g className="safety-figure safety-figure--center" fill="#F6C85F">
                <circle cx="180" cy="35" r="25" />
                <path d="M138 145V98a42 42 0 0 1 84 0v47h-84Z" />
              </g>
              <g className="safety-figure safety-figure--right" fill="#79B8FF">
                <circle cx="288" cy="58" r="20" />
                <path d="M253 145v-30a35 35 0 0 1 70 0v30h-70Z" />
              </g>
              <path
                className="safety-ground"
                d="M20 155c67-19 108-7 160-7s93-12 160 7"
                stroke="#35E5B2"
                strokeLinecap="round"
                strokeWidth="5"
              />
            </svg>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
