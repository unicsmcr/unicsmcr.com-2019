import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// following ensures the width of all Divs is resizable
const Div = styled.div`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%
`;

const Header = styled.div`
    color:white;
    text-align:center;
    font-size:2.5em;
    padding-top:10px;
`;

const divBlack = {
    backgroundColor:"black",
    height:"600px"
}

const divPurple = {
    backgroundColor:"#350B4D",
    height:"600px"
}

export default function Home() {
    return(
        <div>
            <Div style={divBlack}>
                <Header style={{fontSize:"5em"}}>Uni<span style={{color:"yellow"}}>CS</span></Header>
                <h2 style={{textAlign:"center", color:"white"}}>University of Manchester</h2>
                <h2 style={{textAlign:"center", color:"white", lineHeight:"50%"}}>Computer Science Society</h2>
            {/* when i try and make internal CSS, e.g. so i can style all the h2
            it doesn't work
            i think its cos this is an 'export default function'?
            i'm not too sure, but if you find a way to do it, 
            then we can change the above inline styling*/}
            </Div>
            <Div style={divPurple}>
                <Header>About Us</Header>
                <h2 style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
            </Div>
            <Div style={divBlack}>
                <Header>Meet The Team</Header>
                </Div>
            <Div style={divPurple}>
                <Header>Contact Us</Header>
            </Div>
        </div>
    )
}