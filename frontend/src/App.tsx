import { FaGithub } from 'react-icons/fa';
import './App.css'

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
          <FaGithub size={24}  aria-label="GitHub Repository"/>
        </div>

      </nav>

      <section className="hero">
        
        <h1>MoraesLab</h1>

        <p>
          A personal lab for learning, building and 
          experimenting with software development.
        </p>

        <button>
          Lab
        </button>

        <button>
          Contact
        </button>

      </section>

    </>
  );
}

export default App;