import './Hero.css';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content fade-out-on-scroll">
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

      <div className="hero-img fade-out-on-scroll">
        <Logo />
      </div>
    </section>
  );
}

export default Hero;
