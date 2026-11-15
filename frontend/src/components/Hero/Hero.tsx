import logo from '../../assets/logo.svg';
import './Hero.css';
import Button from '../Button/Button';

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
          <Button href="#lab" variant="primary">
            Lab
          </Button>

          <Button href="#contact" variant="secondary">
            Contact
          </Button>
        </div>
      </div>

      <div className="hero-img">
        <img src={logo} alt="MoraesLab Logo" />
      </div>
    </section>
  );
}

export default Hero;
