import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Header.css'; // Import the CSS file for custom styling
import pegaLogo from '../images/pega-logo.svg'; // Path to the logo

function Header() {
  return (
    <Navbar expand="lg" className="header__navbar px-4">
      {/* Logo and Text aligned to the left */}
      <div className="header__left">
        {/* Wrap the logo with Link to navigate back to "/" */}
        <Link to="/">
          <img src={pegaLogo} alt="PegaWorld Logo" className="header__logo" />
        </Link>
        <div className="header__text">
          <h1 className="header__title">PegaWorld</h1>
          <p className="header__dates">June 4-8, 2021</p>
        </div>
      </div>
    </Navbar>
  );
}

export default Header;
