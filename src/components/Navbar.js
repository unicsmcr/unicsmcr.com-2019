import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import { SocialIcon } from './SocialIcon';

import UniCS_logo from '../assets/UniCS_logo.png';
import '../font.css';
import './Navbar.css';

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

// function HashLink(props) {
//   return (
//     <ScrollLink
//       //href="#"
//       className="nav-link"
//       spy={true}
//       smooth={true}
//       duration={500}
//       {...props}
//     >
//       {props.children}
//     </ScrollLink>
//   );
// }

export const NavigationBar = () => (
  <Styles>
    <Navbar variant="dark" expand="lg" sticky="top">
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
          <Nav.Item className="nav-link">
            <HashLink to="/#">Home</HashLink>
          </Nav.Item>
          {/* Team Navlink */}
          <Nav.Item className="nav-link">
            <HashLink to="/#team">Team</HashLink>
          </Nav.Item>
          {/* Events Navlink */}
          <Nav.Item className="nav-link">
            <HashLink to="/#events">Events</HashLink>
          </Nav.Item>
          {/* Contact Navlink */}
          <Nav.Item className="nav-link">
            <HashLink to="/#contact">Contact</HashLink>
          </Nav.Item>
          {/* Gallery Navlink */}
          <Nav.Item className="nav-link">
            <HashLink to="/Gallery/#">Gallery</HashLink>
          </Nav.Item>
          {/* Sponsors Navlink */}
          <Nav.Item className="nav-link">
            <HashLink to="/Sponsors/#">Sponsors</HashLink>
          </Nav.Item>
        </Nav>

        {/* Social links Nav */}
        <Nav className="ml-auto social-navbar">
          <Nav.Item>
            <SocialIcon
              url="http://www.facebook.com/unicsmanchester/"
              socialIconName="facebook-f"
            />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon
              url="https://twitter.com/unics_uom"
              socialIconName="twitter"
            />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon
              url="https://www.instagram.com/unics_uom/"
              socialIconName="instagram"
            />
          </Nav.Item>
          <Nav.Item>
            <SocialIcon
              url="https://github.com/unicsmcr"
              socialIconName="github"
            />
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
