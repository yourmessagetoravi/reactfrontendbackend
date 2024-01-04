import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


function Layout() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About React</Nav.Link>

            <NavDropdown title="Concepts" id="basic-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/props">Props</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/conditions">Conditional</NavDropdown.Item>
           
             </NavDropdown>

             <NavDropdown title="Hooks" id="basic-nav-dropdown">
            
                <NavDropdown.Item as={Link} to="/hooks">UseState</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/useeffecthook">Use Effect</NavDropdown.Item>
              
                <NavDropdown.Item as={Link} to="/usecallbackhook">Usecallback</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/usecontexthook">Usecontext</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/useeffecthook">useeffect</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/usememohook">Usememo</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/usereducerhook">usereducer</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/userefhook">Useref</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/customhook">Customhooks</NavDropdown.Item>
             </NavDropdown>

             <NavDropdown title="Case Studies" id="basic-nav-dropdown2">
             <NavDropdown.Item as={Link} to="/products">Products</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/cart">Cartpage</NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/calc">Caluculator</NavDropdown.Item>
          
                <NavDropdown.Item as={Link} to="/facebook">Facebook Feed</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/netflix">Netflix clone</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/wether">Wether</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link  as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link  as={Link} to="/admin">Admin Dashboard</Nav.Link>
            <Nav.Link  as={Link} to="/studentdata">Student Data</Nav.Link>
            <Nav.Link  as={Link} to="/login">signup|Signin</Nav.Link>
            <Nav.Link  as={Link} to="/Logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;