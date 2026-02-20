import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          
          <h1 className="hero-name">
            Lakshumipathy R<span className="name-dot">.</span>
          </h1>
          <h2 className="hero-role">
           
            
            <span className="role-text">Aspiring Full Stack Developer</span>
          </h2>
          <p className="hero-description">
            I turn curiosity into code — whether that's teaching machines to learn,
            uncovering stories hidden in data, or crafting web experiences people
            actually enjoy using. Always building, always learning.
          </p>
          <p className="hero-location">📍 Chennai, India</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-indicator">
        <ChevronDown size={32} />
      </a>
      <div className="hero-bg-animations">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  );
};

export default Hero;
