import './About.css';
import picture from '../../assets/picture.webp';

function About() {
  return (
    <section className="about">
      <img src={picture} alt="Foto do autor" />
    </section>
  );
}

export default About;
