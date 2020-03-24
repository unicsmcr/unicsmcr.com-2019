import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import { Link as ScrollLink } from 'react-scroll';
import { HashLink as HashLink } from 'react-router-hash-link';
import UniCS_logo from '../assets/UniCS_logo.png';
import '../font.css';
import './Navbar.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { fab } from '@fortawesome/free-brands-svg-icons'  <-- isn't used?
// import {
//   faFacebookSquare,
//   faTwitterSquare,
//   faInstagram,
// } from '@fortawesome/free-brands-svg-icons';
import fb from "../assets/facebook.png";
import tw from "../assets/twitter.png";
import insta from "../assets/instagram.png";

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
          <Nav.Item>
            <Nav.Link>
              <HashLink to="/Gallery/#">Gallery</HashLink>
            </Nav.Link>
          </Nav.Item>

          {/* Sponsors Navlink */}
          <Nav.Item>
            <Nav.Link>
              <HashLink to="/Sponsors/#">Sponsors</HashLink>
            </Nav.Link>
          </Nav.Item>

          {/* Join Us Navlink */}
          <Nav.Item>
            <Nav.Link>
              <HashLink to="/JoinUs/#">Join Us</HashLink>
            </Nav.Link>
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
            > <img
                src={fb}
                alt="fb"
                style={{ width: "50px"}}
              />
            </a>
          </Nav.Item>
          <Nav.Item>
            <a
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/unics_uom"
            ><img
                src={tw}
                alt="tw"
                style={{ width: "50px" }}
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
              <img
                src={insta}
                alt="insta"
                style={{ width: "50px" }}
              />
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
