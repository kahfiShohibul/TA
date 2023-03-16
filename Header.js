import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header>
        <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <Navbar.Brand href='#home'>Bengkel Virly Motor</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'></Navbar.Collapse>
                <Nav className='ml-auto'>
                  {/* <Nav.Link>Sparepart</Nav.Link> */}
                  <Nav.Link href="Database">Database</Nav.Link>
                  <NavDropdown title="Service" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#gantioli">Ganti Oli</NavDropdown.Item>
                  <NavDropdown.Item href="#gantiban">Ganti Ban</NavDropdown.Item>
                  <NavDropdown.Item href="#perbaikanmobil">Perbaikan Mobil</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link>Mobil</Nav.Link>
                  <Nav.Link href="Login">Login</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header