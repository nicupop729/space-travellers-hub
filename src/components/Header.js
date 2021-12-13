import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../assets/planet.png';

const Header = () => (
  <header className="Header">
    <div className="logo-div">
      <img src={logo} alt="logo" />
      <h1 className="logo-title">Space Travelers&apos; Hub</h1>
    </div>
    <nav className="Header__nav">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink to="/missions" activeclassname="active">
            Missions
          </NavLink>
        </li>
        {' | '}
        <li>
          <NavLink to="/profile" activeclassname="active">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
