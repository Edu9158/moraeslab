import logo from '../../assets/logo.svg';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">PHYSICS · SOFTWARE · EXPERIMENTS</p>

        <h1 className="hero-title">
          From physics to <span className="highlight">code.</span>
        </h1>

        <p className="hero-subtitle">
          A personal lab for learning, building and experimenting with software
          development.
        </p>

        <div className="hero-buttons">
          <a href="#lab" className="btn-primary">
            Lab
          </a>

          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>

      <div className="hero-img">
        <img src={logo} alt="MoraesLab Logo" />
      </div>
    </section>
  );
}

export default Hero;
