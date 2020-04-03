import React from 'react';
import styled from 'styled-components';
import '../font.css';
import './Home.css';
import aboutus from './aboutus/aboutus';
import user from '../assets/user.png';
import Contact from '../contact/Contact';
// example pics pls crop to 5:3 ratio
import sh_2019 from '../assets/sh_2019_edit.png';
import sh_2018 from '../assets/sh_2018_edit.png';
import guh_sample from '../assets/guh_sample.jpg';

const Header = styled.div`
  color: white;
  text-align: center;
  font-size: 3em;
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
  const memberDisplay = props.teamMembers.map((teamMember) => (
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
        <div className="section-black py-md-2">
          <div className="slideshow-container col-12">
            <div
              id="slideshow"
              className="carousel slide"
              data-ride="carousel"
              data-interval="4000"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#slideshow"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#slideshow" data-slide-to="1"></li>
                <li data-target="#slideshow" data-slide-to="2"></li>
              </ol>

              <div className="carousel-inner">
                <div className="carousel-caption d-block text-center">
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
                <div className="carousel-item active">
                  <img
                    className="d-inline-block w-100"
                    src={sh_2018}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-inline-block w-100"
                    src={sh_2019}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-inline-block w-100"
                    src={guh_sample}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#slideshow"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#slideshow"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
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
          <Contact />
        </div>

        <div className="section-black" id="events">
          <Header>Events</Header>
        </div>
      </div>
    );
  }
}
