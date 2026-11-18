import './About.css';
import picture from '../../assets/picture.webp';
import Button from '../Button/Button';

const TECHS = [
  'React',
  'TypeScript',
  'JavaScript',
  'C#',
  'ASP.NET',
  'HTML/CSS',
];

function About() {
  return (
    <section id="about" className="about">
      <p className="about-eyebrow">about me</p>
      <h2 className="about-title">
        Curious by training, <span className="highlight">builder</span> by
        choice.
      </h2>

      <div className="about-grid">
        <div className="about-card about-card--photo">
          <img src={picture} alt="Portrait of Eduardo" />
        </div>

        <div className="about-card about-card--story">
          <h3>My story</h3>
          <p>
            My first contact with code came early, in a web development course
            in high school. Physics came next — and taught me to break messy
            problems down into logic, a mindset I now bring to software.
          </p>
        </div>

        <div className="about-card about-card--now">
          <h3>Now</h3>
          <p>
            Today I work as a NOC analyst, getting hands-on with infrastructure
            and production systems — while building my path into software
            development, one project at a time.
          </p>

          <div className="about-card-action">
            <Button href="#lab" variant="primary">
              See my projects
            </Button>
          </div>
        </div>

        <div className="about-card about-card--stack">
          <h3>Stack</h3>
          <ul>
            {TECHS.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="about-card about-card--offscreen">
          <h3>Off-screen</h3>
          <p>
            When I'm not coding, you'll probably find me with a guitar — I've
            played in a few bands, and music is still how I recharge.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
