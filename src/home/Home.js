import React from 'react';
import styled from 'styled-components';
import '../font.css';
import './Home.css';
import aboutus from './aboutus/aboutus';
import user from '../assets/user.png';
// example pics
import guh_2019 from '../assets/guh_2019.jpg';
import sh_2019 from '../assets/sh_2019.jpg';
import guh_2018 from '../assets/guh_2018.jpg';

const Header = styled.div`
  color: white;
  text-align: center;
  font-size: 2.5em;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const AboutUs = styled.div`
  color: white;
  font-size: 2vw;
  padding: 20px 10% 20px 10%;
`;

const teamMembers = [
  { name: 'Sara Caballero Bruno', role: 'Co-Chair', img: user },
  { name: 'Raluca Lazarescu', role: 'Co-Chair', img: user },
  { name: 'Aakash Kalantre', role: 'Treasurer', img: user },
  { name: 'Joana Cruz', role: 'Secretary', img: user },
  { name: 'Theodore Aaron', role: 'Game Dev Officer', img: user },
  { name: 'Jess Xue', role: 'Graphics Officer', img: user },
  { name: 'Smitha Kariapuram', role: 'May Ball Officer', img: user },
  { name: 'Nora Tuta', role: 'PR Officer', img: user },
  { name: 'Simas Kuprelis', role: 'Events Officer', img: user },
  { name: 'Sean Parker', role: 'Dev Officer', img: user },
  { name: 'Mohammed Anees', role: 'Procurement Officer', img: user },
];

function MemberList(props) {
  const memberDisplay = props.teamMembers.map(teamMember => (
    <div key={teamMember.name} className="grid-item-home">
      <img className="team-pic" src={teamMember.img} alt="" />
      <figcaption className="text">
        <h4>{teamMember.name}</h4>
        <h5>{teamMember.role}</h5>
      </figcaption>
    </div>
  ));

  return <div className="grid-container-home">{memberDisplay}</div>;
}

export default class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <div className="section-black">
          <Header style={{ fontSize: '5em' }}>
            Uni<span style={{ color: 'yellow' }}>CS</span>
          </Header>
          <h2 style={{ textAlign: 'center', color: 'white' }}>
            University of Manchester
          </h2>
          <h2
            style={{
              textAlign: 'center',
              color: 'white',
            }}
          >
            Computer Science Society
          </h2>
        </div>

        <div className="section-black">
          <div className="slideshow-container p-md-4 col-12 col-md-8">
            <div id="slideshow" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#slideshow" data-slide-to="0" className="active"></li>
                <li data-target="#slideshow" data-slide-to="1"></li>
                <li data-target="#slideshow" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={guh_2019} alt="First slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Event 1</h5>
                    <p>Caption 1</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={sh_2019} alt="Second slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Event 2</h5>
                    <p>Caption 2</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={guh_2018} alt="Third slide"/>
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Event 3</h5>
                    <p>Caption 3</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#slideshow" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#slideshow" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>

        <div className="section-purple">
          <Header>About Us</Header>
          <AboutUs>
            {aboutus.map((element, id) => (
              <p key={id}> {element} </p>
            ))}
          </AboutUs>
        </div>

        <div className="section-black" id="team">
          <Header>Meet The Team</Header>
          <MemberList teamMembers={teamMembers} />
        </div>

        <div className="section-purple" id="contact">
          <Header>Contact Us</Header>
        </div>

        <div className="section-black" id="events">
          <Header>Events</Header>
        </div>
      </div>
    );
  }
}
