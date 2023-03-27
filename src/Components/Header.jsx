import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../style/Header.scss'

import Button from 'react-bootstrap/Button';
import logo from  '../assets/icons/logo.svg'
import search from '../assets/icons/search.svg'



function BasicExample() {
    return (
      <Navbar className='nav-wrapper'  bg="light" expand="lg">
        <Container className='navbar'  >
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#sell">Sell</Nav.Link>
              <Nav.Link href="#marketplace">Marketplace</Nav.Link>
              <Nav.Link href="#community">Community</Nav.Link>
              <Nav.Link href="#develop">Develop</Nav.Link>
              <Nav.Link href="#resources">Resources</Nav.Link>
              <Button id='light' size='lg' variant="light">LogIn</Button>{' '}
              <Button id='primary' size='lg' variant="primary">Get Started</Button>{' '}
           
              <span>
                <img className='icon' src={search} alt="" />
              </span>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      
      </Navbar>

    );
  }
  
  export default BasicExample;