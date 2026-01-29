import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Linkedin, 
  Phone,
  Heart,
  Globe,
  Users,
  ExternalLink,
  Target,
  Smile,
  Focus,
  ChevronRight,
  Sparkles,
  Award,
  BookOpen,
  Zap,
  UserCheck,
  Handshake,
  TrendingUp,
  Search,
  MessageSquare,
  UserPlus
} from 'lucide-react';

const SequentialIconAnimation = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const icons = [
    UserCheck,     // Leadership
    Heart,         // Heart (empathy)
    Users,         // Employee
    Handshake,     // Partnership
    TrendingUp,    // Career Growth
    Search,        // HR Hunting
    MessageSquare, // Interview
    UserPlus,      // Recruitment
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Reset to first icon when scrolling back to cover
        setIndex(0);
        setVisible(true);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % icons.length);
        setVisible(true);
      }, 600); // Smooth duration for fade out
    }, 3000); // 3 seconds total per icon cycle
    
    return () => clearInterval(interval);
  }, [icons.length]);

  const CurrentIcon = icons[index];

  return (
    <div ref={containerRef} className="mb-10 p-4 bg-ruby/5 rounded-full border border-ruby/10 shadow-inner w-24 h-24 flex items-center justify-center">
       <div className={`transition-all duration-700 ease-in-out transform ${visible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm'}`}>
         <CurrentIcon className="text-ruby" size={44} />
       </div>
    </div>
  );
};

const WordTransformation = () => {
  const [phase, setPhase] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);

  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          clearAllTimeouts();
          setPhase(0);
          timeoutsRef.current.push(window.setTimeout(() => setPhase(1), 1200));
          timeoutsRef.current.push(window.setTimeout(() => setPhase(2), 2800));
          timeoutsRef.current.push(window.setTimeout(() => setPhase(3), 4200));
        } else {
          setPhase(-1);
          clearAllTimeouts();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      clearAllTimeouts();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-32 flex items-center justify-center overflow-hidden w-full mt-4">
      <div 
        className={`absolute transition-all duration-[1200ms] ease-in-out text-xl md:text-3xl font-serif italic text-ruby
          ${phase === -1 ? 'opacity-0 translate-x-[-150%] blur-md' : ''}
          ${phase === 0 ? 'opacity-100 translate-x-[-100%] blur-0' : ''}
          ${phase === 1 ? 'opacity-100 translate-x-[-10%] blur-0' : ''}
          ${phase >= 2 ? 'opacity-0 scale-90 blur-xl' : ''}
        `}
      >
        Empathy-Driven
      </div>

      <div 
        className={`absolute transition-all duration-[1200ms] ease-in-out text-xl md:text-3xl font-serif italic text-ruby
          ${phase === -1 ? 'opacity-0 translate-x-[150%] blur-md' : ''}
          ${phase === 0 ? 'opacity-100 translate-x-[100%] blur-0' : ''}
          ${phase === 1 ? 'opacity-100 translate-x-[10%] blur-0' : ''}
          ${phase >= 2 ? 'opacity-0 scale-90 blur-xl' : ''}
        `}
      >
        Well-Being Focused
      </div>

      <div 
        className={`transition-all duration-[1500ms] ease-out text-4xl md:text-6xl font-serif font-bold text-ruby-dark tracking-tight
          ${phase < 3 ? 'opacity-0 scale-125 blur-2xl translate-y-4' : 'opacity-100 scale-100 blur-0 translate-y-0'}
        `}
      >
        People-First HR
      </div>
    </div>
  );
};

const FadeInSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const App: React.FC = () => {
  const [taglineVisible, setTaglineVisible] = useState(false);
  const taglineRef = useRef<HTMLHeadingElement>(null);
  const emailAddress = "liyaaugustin21@gmail.com";
  const phoneNumber = "+971 58 829 4749";
  const linkedInUrl = "https://www.linkedin.com/in/liya-augustin";

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTaglineVisible(false);
        setTimeout(() => setTaglineVisible(true), 100);
      } else {
        setTaglineVisible(false);
      }
    }, { threshold: 0.1 });

    if (taglineRef.current) observer.observe(taglineRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-roseivory-light text-neutral-text min-h-screen font-sans selection-custom overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-700 bg-roseivory-light/80 backdrop-blur-lg border-b border-ruby/5">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 py-6 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold tracking-tight text-neutral-text group">
            Liya Augustin<span className="text-ruby group-hover:animate-pulse">.</span>
          </a>
          <div className="hidden md:flex items-center space-x-12">
            {['Perspective', 'Chronicles', 'Dimension', 'Foundation', 'Connect'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-neutral-text/50 hover:text-ruby text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute bottom-[-4px] left-0 w-full h-[1px] bg-ruby transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-ruby/5 via-roseivory-light to-roseivory-light">
        <div className="max-w-5xl mx-auto relative z-10 text-center flex flex-col items-center">
          
          <SequentialIconAnimation />
          
          <h1 
            ref={taglineRef}
            className={`text-5xl md:text-8xl font-serif font-medium text-neutral-text mb-8 leading-[1.1] tracking-tighter max-w-4xl transition-all duration-1000 ${taglineVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}
          >
            Nurturing human potential <br />
            <span className="italic text-ruby font-normal">through psychological clarity.</span>
          </h1>
          
          <p className="text-neutral-text/40 text-[11px] font-bold uppercase tracking-[0.5em] mb-12">
            Clinical Insight • Strategic Empathy • Organizational Growth
          </p>

          <WordTransformation />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <span className="text-[9px] uppercase tracking-widest font-black">Scroll Down</span>
          <ChevronRight className="text-ruby rotate-90 animate-bounce" size={20} />
        </div>
      </header>

      {/* Perspective Section */}
      <section id="perspective" className="py-48 bg-roseivory px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <span className="text-ruby font-bold text-[11px] uppercase tracking-[0.5em] mb-12 block">Perspective</span>
            <h2 className="text-3xl md:text-5xl font-serif leading-[1.3] text-neutral-text mb-16 italic font-medium">
              "I believe that HR should be a bridge, not a barrier."
            </h2>
            <div className="w-16 h-px bg-ruby/20 mx-auto mb-16"></div>
            <div className="space-y-8 text-xl text-neutral-text/70 leading-relaxed font-medium">
              <p>
                My professional philosophy is centered on the intersection of human behavior and corporate excellence. I don't just manage processes; I understand the people behind them. 
                By applying psychological frameworks to everyday HR challenges, I foster a culture of transparency and trust.
              </p>
              <p>
                To me, a "People-First" approach is the only sustainable way to drive high-performance. When individuals feel understood and supported, their potential is unlocked, leading to measurable organizational success.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Chronicles Section */}
      <section id="chronicles" className="py-48 bg-roseivory-light px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-24">
            <span className="text-ruby font-bold text-[11px] uppercase tracking-[0.5em] mb-6 block">Chronicles</span>
            <h3 className="text-2xl md:text-4xl font-serif font-semibold">Narratives of Professional Growth</h3>
          </FadeInSection>

          <div className="max-w-5xl mx-auto space-y-24">
            <FadeInSection className="flex flex-col md:flex-row gap-12 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-ruby/5 border border-ruby/10 flex items-center justify-center text-ruby group-hover:bg-ruby group-hover:text-white transition-all duration-500">
                <Users size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-ruby mb-4">Strategic HR • Wahy Lab Solutions</h4>
                <p className="text-xl text-neutral-text/80 leading-relaxed font-medium">
                  I spearheaded recruitment cycles with a focus on value-alignment, ensuring that every new hire shared our core psychological vision. By refining onboarding into a transformative cultural immersion, I significantly reduced early-stage attrition and enhanced employee belonging.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection className="flex flex-col md:flex-row gap-12 items-start group">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-ruby/5 border border-ruby/10 flex items-center justify-center text-ruby group-hover:bg-ruby group-hover:text-white transition-all duration-500">
                <Heart size={32} />
              </div>
              <div className="flex-1">
                <h4 className="text-[12px] font-black uppercase tracking-widest text-ruby mb-4">Engagement Design • St. Thomas Hospital</h4>
                <p className="text-xl text-neutral-text/80 leading-relaxed font-medium">
                  In a high-pressure medical environment, I implemented resilience-focused support systems. By facilitating behavioral feedback loops between leadership and frontline staff, I helped build a climate of mutual respect and psychological endurance that improved overall patient-care quality.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Dimension Section */}
      <section id="dimension" className="py-48 bg-roseivory px-8">
        <div className="max-w-7xl mx-auto">
          <FadeInSection className="text-center mb-24">
            <span className="text-ruby font-bold text-[11px] uppercase tracking-[0.5em] mb-6 block">Dimension</span>
            <h3 className="text-2xl md:text-4xl font-serif font-semibold">Strategic Enablers</h3>
          </FadeInSection>
          
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                icon: Focus, 
                title: "Conflict Transformation", 
                desc: "I specialize in de-escalating workplace friction by uncovering the psychological root causes of misunderstandings." 
              },
              { 
                icon: Zap, 
                title: "Intrinsic Motivation", 
                desc: "I design performance frameworks that move beyond simple incentives, tapping into individual purpose and growth." 
              },
              { 
                icon: Globe, 
                title: "Global HR Logic", 
                desc: "I harmonize complex UAE compliance standards with progressive, empathetic people policies." 
              }
            ].map((item, idx) => (
              <FadeInSection key={idx} className="bg-white/50 p-12 border border-ruby/5 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-14 h-14 bg-ruby/5 text-ruby flex items-center justify-center mb-10 rounded-xl group-hover:bg-ruby group-hover:text-white transition-all duration-500">
                  <item.icon size={24} />
                </div>
                <h4 className="text-lg font-serif font-bold mb-6 text-neutral-text">{item.title}</h4>
                <p className="text-neutral-text/60 font-medium leading-relaxed">{item.desc}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="foundation" className="py-48 bg-roseivory-light px-8">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <div className="mb-12 flex justify-center">
              <div className="w-20 h-20 bg-ruby/5 rounded-full flex items-center justify-center border border-ruby/10">
                <Award className="text-ruby" size={40} />
              </div>
            </div>
            <span className="text-ruby font-bold text-[11px] uppercase tracking-[0.5em] mb-8 block">Foundation</span>
            <h2 className="text-2xl md:text-4xl font-serif leading-relaxed text-neutral-text italic font-medium mb-12">
              "Mastery is built on the convergence of science and strategy."
            </h2>
            <div className="p-12 bg-white/60 rounded-[3rem] border border-ruby/5 shadow-sm text-xl text-neutral-text/70 leading-relaxed font-medium">
              Achieving the <span className="text-ruby font-bold">University First Rank in Human Resource Management</span> at the University of Madras defined my commitment to professional excellence. 
              My clinical roots in <span className="text-ruby font-bold">Psychology</span> from St. Berchmans College allow me to view HR through a unique lens—one that balances analytical rigor with a profound understanding of human nature.
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-48 bg-ruby/5 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInSection>
            <span className="text-ruby font-bold text-[11px] uppercase tracking-[0.5em] mb-12 block">Connect</span>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-neutral-text mb-24">Let's Dialogue.</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
              <a href={`mailto:${emailAddress}`} className="p-12 bg-white/80 hover:bg-white transition-all rounded-[2.5rem] border border-ruby/10 group shadow-sm flex flex-col items-center">
                <Mail size={40} className="mb-8 text-ruby/40 group-hover:text-ruby transition-all duration-500" />
                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30">Email</h5>
                <span className="text-lg font-serif font-bold text-neutral-text break-all">{emailAddress}</span>
              </a>
              <a href={`tel:${phoneNumber}`} className="p-12 bg-white/80 hover:bg-white transition-all rounded-[2.5rem] border border-ruby/10 group shadow-sm flex flex-col items-center">
                <Phone size={40} className="mb-8 text-ruby/40 group-hover:text-ruby transition-all duration-500" />
                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30">Phone</h5>
                <span className="text-lg font-serif font-bold text-neutral-text">{phoneNumber}</span>
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-12 bg-white/80 hover:bg-white transition-all rounded-[2.5rem] border border-ruby/10 group shadow-sm flex flex-col items-center">
                <Linkedin size={40} className="mb-8 text-ruby/40 group-hover:text-ruby transition-all duration-500" />
                <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 opacity-30">LinkedIn</h5>
                <span className="text-lg font-serif font-bold text-neutral-text flex items-center gap-2">
                  liya-augustin <ExternalLink size={14} />
                </span>
              </a>
            </div>
            
            <div className="mt-64 flex flex-col items-center gap-10">
               <p className="text-5xl md:text-8xl font-serif italic tracking-tighter text-ruby-dark/10 animate-pulse">Ready to Grow, Together.</p>
               <div className="h-px w-24 bg-ruby/20"></div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-roseivory-dark/40 border-t border-ruby/5 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <a href="#" className="text-2xl font-serif font-bold text-neutral-text">Liya Augustin</a>
            <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.5em] text-ruby/60">Bridging Psychology & HR Excellence</p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-12 text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-text/30">
            <span>Dubai, UAE</span>
            <div className="hidden md:block w-2 h-2 rounded-full bg-ruby/20"></div>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;