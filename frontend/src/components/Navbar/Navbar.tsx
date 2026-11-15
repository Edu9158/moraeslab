import { FaGithub } from 'react-icons/fa';
import './Navbar.css';
import { LINKS } from '../../config/links';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MoraesLab</div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Lab</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <a
        href={LINKS.github}
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-action"
        aria-label="GitHub Repository"
      >
        <FaGithub size={26} />
      </a>
    </nav>
  );
}

export default Navbar;
