import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import keycapNav from '../img/keycapnav.png';
import brand from '../img/marca.png'
import '../css/navbar.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href=".">
          <ul className="bran-icon">
            <li>
            <img
              src={keycapNav}
              width="120"
              height="120"
              className="d-inline-block align-top"
              alt="keycaplogo"
            />
            </li>
            <li>
        <img src={brand} className="App-marca" alt="marca" width="250px"
        height="80px"/>
            </li>
          </ul>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="gap-5">
            <Nav.Link href="/aboutUs">About us</Nav.Link>
            <Nav.Link href="/keycaps">Keycaps</Nav.Link>
          </Nav>
          <div className="gap-5 log">
            <Nav.Link href="/Auth">Log-in</Nav.Link>
            <Nav.Link href="/Auth">Register</Nav.Link>
          </div>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;