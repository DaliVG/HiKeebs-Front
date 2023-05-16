import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import keycapNav from '../img/keycapnav.png';
import brand from '../img/marca.png'
import '../navbar.css';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
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
          <Nav className="gap-4">
            <Nav.Link href=".">Home</Nav.Link>
            <Nav.Link href="/aboutUs">About us</Nav.Link>
            <Nav.Link href="/lista">Keycaps</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;