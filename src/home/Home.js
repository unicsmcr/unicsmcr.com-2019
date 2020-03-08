import React from 'react';
import styled from 'styled-components';
import '../font.css';
import './home.css';
import aboutus from './aboutus/aboutus';
import user from '../assets/user.png';

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
  padding: 0 50px 0 50px;
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
        <div className="divBlack">
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

        <div className="divPurple">
          <Header>About Us</Header>
          <AboutUs>
            {aboutus.map((element, id) => (
              <p key={id}> {element} </p>
            ))}
          </AboutUs>
        </div>

        <div className="divBlack" id="team">
          <Header>Meet The Team</Header>
          <MemberList teamMembers={teamMembers} />
        </div>

        <div className="divPurple">
          <Header>Contact Us</Header>
        </div>
      </div>
    );
  }
}
