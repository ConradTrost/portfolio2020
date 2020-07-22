import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap/';

class Navigation extends React.Component {

  render() {
    return (
          <Navbar expand="lg" fixed="top" className="nav-bar p-0 ml-auto" fluid="false" >
            <Navbar.Brand href="/" className="nav-bar-brand"><i className="fas fa-user-tie"></i>Conrad Trost, Portfolio</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/skills">Projects</Link>
                  <Link className="nav-link" to="/about">Resumé</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
            </Navbar.Collapse>
          </Navbar>
    );
  }
}


export default Navigation;