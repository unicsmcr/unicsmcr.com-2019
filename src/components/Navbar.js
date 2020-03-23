import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import UniCS_logo from '../assets/UniCS_logo.png';
import '../font.css';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'  <-- isn't used?
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Styles = styled.div`
  .navbar {
    background-color: #350b4d;
  }

  a,
  .navbar-brand,
  .navbar-nav,
  .nav-link {
    text-decoration: none;
    font-size: 18px;
    color: white !important;
  }

  a:hover,
  .navbar-brand:hover,
  .navbar-nav,
  .nav-link:hover {
    text-decoration: none;
    color: #ac6fc6 !important;
  }
  #contact {
    color: blue;
  }
`;

function NavScrollLink(props) {
  return (
    <ScrollLink
      href="#"
      className="nav-link"
      spy={true}
      smooth={true}
      duration={500}
      {...props}
    >
      {props.children}
    </ScrollLink>
  );
}

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" sticky="top">
      <Navbar.Brand>
        <Link to="/">
          <img
            src={UniCS_logo}
            alt="logo"
            style={{ width: 95, marginTop: -2 }}
          />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {/* Home Navlink */}
          <Nav.Item>
            <NavScrollLink to="home-page">Home</NavScrollLink>
          </Nav.Item>

          {/* Team Navlink */}
          <Nav.Item>
            <NavScrollLink to="team">Team</NavScrollLink>
          </Nav.Item>

          {/* Gallery Navlink */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/Gallery">Gallery</Link>
            </Nav.Link>
          </Nav.Item>

          {/* Sponsors Navlink */}
          <Nav.Item>
            <Nav.Link>
              <Link to="/Sponsors">Sponsors</Link>
            </Nav.Link>
          </Nav.Item>

          {/* Contact Navlink */}
          <Nav.Item>
            <NavScrollLink to="contact">Contact</NavScrollLink>
          </Nav.Item>

          {/* Events Navlink */}
          <Nav.Item>
            <NavScrollLink to="events">Events</NavScrollLink>
          </Nav.Item>
        </Nav>

        {/* Social links Nav */}
        <Nav className="ml-auto">
          <Nav.Item>
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="http://www.facebook.com/unicsmanchester/"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                color="#AC6FC6"
              />
              {/*How to change the background color to white and copyright issue!!!*/}
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/unics_uom"
            >
              <FontAwesomeIcon
                icon={faTwitterSquare}
                size="2x"
                color="#AC6FC6"
              />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/unics_uom/"
              style={{ paddingRight: 10 }}
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" color="#AC6FC6" />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
