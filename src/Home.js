import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './font.css';
  

// following ensures the width of all Divs is resizable
const Div = styled.div`
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    font-family: Nexa Light;

`;

const Header = styled.div`
    color:white;
    text-align:center;
    font-size:2.5em;
    padding-top:10px;
    padding-bottom:10px;
    font-family:Nexa Bold;
`;

const divBlack = {
    backgroundColor:"black",
    height:"600px"
}

const divPurple = {
    backgroundColor:"#350B4D",
    height:"600px"
}

const aboutUs = (
        <p>UniCS is the University of Manchester's tech society. We are a big community of people with 
        a passion for technology and creating innovative solutions for everyone to enjoy. Through our 
        hackathons and other events, we aim to bring students and industry closer together. When we aren’t 
        organising our own events we also travel to events in places like Barcelona, Helsinki, and Bordeaux, 
        amongst other exotic destinations, often free due to various hackathon sponsors. Come join us to see 
        what we get up to this year!<br/><br/>Our own events are suited to every level of knowledge and all degree
         courses. If you are someone who is interested in knowing how they can use computers to see an idea 
         come to life, UniCS is the society for you. It doesn’t matter if you have never touched a computer 
         or been programming for years, you will never be bored at our events. And if you still aren’t convinced, 
         we have free pizza (and occasionally drinks). </p>
)
export default function Home() {
    return(
        <div>
            <Div style={divBlack}>
                <Header style={{fontSize:"5em"}}>Uni<span style={{color:"yellow"}}>CS</span></Header>
                <h2 style={{textAlign:"center", color:"white"}}>University of Manchester</h2>
                <h2 style={{textAlign:"center", color:"white", lineHeight:"50%"}}>Computer Science Society</h2>
            </Div>
            <Div style={divPurple}>
                <Header>About Us</Header>
                <h2 style={{color:"white", fontSize:"1.5em", paddingLeft: "70px", paddingRight: "70px"}}>{aboutUs}</h2>

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