import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UniCS_logo from '../assets/UniCS_logo.png'
import '../font.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'  <-- isn't used?
import {faFacebookSquare,faTwitterSquare, faInstagram} from '@fortawesome/free-brands-svg-icons'


import Scroll from 'react-scroll'
const ScrollLink = Scroll.ScrollLink


const Styles = styled.div`
.navbar{
    background-color: #350B4D;
}

a, .navbar-brand, .navbar-nav, .nav-link{
    text-decoration: none;
    padding-left: 20px;
    font-size: 16px;
    color: #FAF9FE;
}

a:hover, .navbar-brand:hover, .navbar-nav, .nav-link:hover{
    text-decoration: none;
    color: #AC6FC6;
}
#contact{
    color: blue;
}
`;

export const Navigationbar = () => (
    
    <Styles>
        <Navbar expand = 'lg' sticky="top">
        <Navbar.Brand> 
            <Link to="/Home">
                <img src={UniCS_logo} alt = "logo" style = {{width:95, marginTop: -2}}/> 
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/Home">Home</Link>
                    </Nav.Link>
                </Nav.Item>

                
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/Home">Team</Link>
                    </Nav.Link>

                        
                    {/* <Nav.Link
                    onSelect={() => Scroll.scrollTo('team', {
                        smooth: true,
                        offset: -70,
                        duration: 500,
                    })}
                    > Team
                        <ScrollLink 
                            to="team" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                            className='team' 
                            activeClass='active-team'
                        >
                            Team!!!!!!
                        </ScrollLink>
                    </Nav.Link> */}
                </Nav.Item>
                {/* ^add the ability to scroll to meet the team */}
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/Jobs">Jobs</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/Gallery" >Gallery</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/Sponsors">Sponsors</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to ="/JoinUs">Join Us</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to = "/Contact">Contact</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <a target="_blank" href="http://www.facebook.com/unicsmanchester/" style={{ marginLeft:280, paddingLeft: 10}}>
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#AC6FC6"/>
                        {/*How to change the background color to white and copyright issue!!!*/}
                    </a>   
                </Nav.Item>
                <Nav.Item>
                    <a target="_blank" href="https://twitter.com/unics_uom" style={{ paddingLeft: 10}}>
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x" color="#AC6FC6" />
                    </a>
                </Nav.Item>
                <Nav.Item>
                    <a target="_blank" href="https://www.instagram.com/unics_uom/" style={{ paddingLeft: 10}}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="#AC6FC6"/>
                    </a>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    </Styles>
)