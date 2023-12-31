import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  
  return (
    <div >
    <Navbar >
      <Container className='navcontain'>
        <Navbar.Brand href="home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" id='bolder' className='detail-one'>Home</Nav.Link>
            <Nav.Link as={Link} to="/about/" id='bolder' className='detail-one'>About</Nav.Link>
            <Nav.Link as={Link} to="/gallery/" id='bolder' className='detail-one'>Gallery</Nav.Link>
            <Nav.Link as={Link} to="/commissions/" id='bolder' className='detail-one'>Commissions</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown" className='detail-one'>
              <NavDropdown.Item as={Link} to="/login/">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sign_up/">Sign up</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
              {/* <NavDropdown.Divider /> */}
              {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;