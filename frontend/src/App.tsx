import { FaGithub } from 'react-icons/fa';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    
    <>

      <nav className="navbar">
        
        <div className="logo">
          MoraesLab
        </div>

        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Lab</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        <div className="navbar-action">
          <FaGithub size={26}  aria-label="GitHub Repository"/>
        </div>

      </nav>

      <section className="hero">

        <div className="hero-content">

          <h1>MoraesLab</h1>

          <p>
            A personal lab for learning, building and
            experimenting with software development.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Lab
            </button>

            <button className="btn-secondary">
              Contact
            </button>

          </div>

        </div>

        <div className="hero-img">
          <img src={logo} alt="MoraesLab Logo" />
        </div>

      </section>

      <section className="about">
        <p></p>
      </section>

    </>
  );
}

export default App;