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
          <Nav className="gap-5 m-5">
            <Nav.Link href="/keycaps">Keycaps</Nav.Link>
            <Nav.Link href="/aboutUs">About us</Nav.Link>
          </Nav>
          <Nav className="gap-5 log">
            <Nav.Link href="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg></Nav.Link>
            <Nav.Link href="/login">Log-in</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;