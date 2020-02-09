import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './font.css';
import './home.css';

const Header = styled.div`
    color:white;
    text-align:center;
    font-size:2.5em;
    padding-top:10px;
    padding-bottom:10px;
    font-family:Nexa Bold;
`;

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
export default class Home extends React.Component {

    render() {
        return(
            <div>
                <div class="divBlack">
                    <Header style={{fontSize:"5em"}}>Uni<span style={{color:"yellow"}}>CS</span></Header>
                    <h2 style={{textAlign:"center", color:"white"}}>University of Manchester</h2>
                    <h2 style={{textAlign:"center", color:"white", lineHeight:"50%"}}>Computer Science Society</h2>
                </div>
                    
                <div class="divPurple">
                    <Header>About Us</Header>
                    <h2 style={{color:"white", fontSize:"1.5em", paddingLeft: "70px", paddingRight: "70px"}}>{aboutUs}</h2>
                </div>

                <div class="divBlack">
                    <Header>Meet The Team</Header>
                </div>
                <div class="divPurple">
                    <Header>Contact Us</Header>
                </div>

                {/* This has created the structure for the facebook events thing*/}
                <section id="sponsors-events">
                    <div class="row no-side-buffers">
                        <div class="col-md-6">
                        <h2 class="section-title">Our Events</h2>
                        <div id="events-section" class="flex-vertical">
                            <div class="row justify-content-center">
                            <div id="events-list" class="col-lg-8">
                                <div id="happening-now" class="event-subset">
                                    <h5 class="event-subset-identifier">Happening now:</h5>
                                    <hr class="event-subset-separator"/>
                                    <div class="event-subset-list"></div>
                                </div>
                                <div id="upcoming" class="event-subset">
                                    <h5 class="event-subset-identifier">Upcoming events:</h5>
                                    <hr class="event-subset-separator"/>
                                    <div class="event-subset-list"></div>
                                </div>
                                <div id="past">
                                    <h5 class="event-subset-identifier">Past events:</h5>
                                    <hr class="event-subset-separator"/>
                                    <div class="event-subset-list"></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>


            </div>
        )
    }
}