import { NavLink } from 'react-router-dom';
import './header.css';
import logo from '../../assets/planet.png';

const Header = () => (
  <header className="Header">
    <div className="Header__div">
      <img src={logo} alt="logo" className="Header__div_logo" />
      <h1 className="Header__div_title">Space Travelers&apos; Hub</h1>
    </div>
    <nav className="Header__nav">
      <ul className="Header__nav_list">
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
        <span className="Header__nav_list_bar" />
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
