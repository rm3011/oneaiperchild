import React, { useLayoutEffect, useRef } from 'react';
import { BookOpen, Telescope, Pencil, Brain } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Content.css';

gsap.registerPlugin(ScrollTrigger);

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

const Content = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      if (
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        !sectionRef.current
      ) return;

      const curve = sectionRef.current.querySelector<SVGPathElement>('.growth-curve-path');
      const curveLength = curve?.getTotalLength() ?? 0;
      if (curve && curveLength > 0) {
        gsap.set(curve, {
          strokeDasharray: curveLength,
          strokeDashoffset: curveLength
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
        .from('.how-it-works-header', {
          opacity: 0,
          y: 20,
          duration: 0.55,
          ease: 'power3.out'
        })
        .fromTo(
          curve,
          { strokeDashoffset: curveLength },
          {
            strokeDashoffset: 0,
            duration: 1.35,
            ease: 'power2.inOut'
          },
          '-=0.1'
        )
        .from('.growth-point', {
          scale: 0,
          opacity: 0,
          transformOrigin: '50% 50%',
          duration: 0.35,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }, '-=0.8')
        .from('.step-item', {
          opacity: 0,
          y: 18,
          duration: 0.45,
          stagger: 0.12,
          ease: 'power3.out'
        }, '-=0.55');
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section id="how-it-works" className="how-it-works-section section" ref={sectionRef}>
      <div className="container-custom">
        <div className="how-it-works-header">
          <div className="header-left">
            <div className="eyebrow">A JOURNEY THAT GROWS WITH THEM</div>
            <h2 className="how-it-works-title">How it works</h2>
          </div>
          <div className="header-right">
            <p className="header-subtitle">
              Every question opens a door. Every discovery builds confidence for what comes next.
            </p>
          </div>
        </div>

        <div className="growth-journey">
          <div className="growth-graph" aria-hidden="true">
            <svg className="growth-graph-svg" viewBox="0 0 1000 260" preserveAspectRatio="none">
              <defs>
                <linearGradient id="growth-curve-gradient" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="55%" stopColor="#36e6b0" />
                  <stop offset="100%" stopColor="#a5f3d4" />
                </linearGradient>
              </defs>
              <path className="growth-graph-gridline" d="M0 220 H1000 M0 155 H1000 M0 90 H1000" />
              <path className="growth-curve-path" d="M40 220 C75 220 90 220 125 218 S315 180 375 176 S560 134 625 125 S805 75 875 60 S935 38 960 35" />
              <circle className="growth-point" cx="125" cy="218" r="7" />
              <circle className="growth-point" cx="375" cy="176" r="7" />
              <circle className="growth-point" cx="625" cy="125" r="7" />
              <circle className="growth-point" cx="875" cy="60" r="7" />
            </svg>
            <span className="growth-axis-label growth-axis-label-start">CURIOSITY</span>
            <span className="growth-axis-label growth-axis-label-end">POSSIBILITY</span>
          </div>

          <div className="how-it-works-flow">
            {steps.map((step) => (
              <div className={`step-item theme-${step.theme}`} key={step.number}>
                <div className="icon-circle-wrapper">
                  <div className="icon-circle">
                    {step.icon}
                  </div>
                </div>

                <div className="step-title-group">
                  <span className="step-number">{step.number}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>

                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;