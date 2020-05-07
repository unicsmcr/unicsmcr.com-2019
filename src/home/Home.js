import React from 'react';
import styled from 'styled-components';
import '../font.css';
import './Home.css';
import aboutus from './aboutus/aboutus';
import { Header, Hero } from './header/Header';
import { Team } from '../team/Team';
import Contact from '../contact/Contact';
// example pics pls crop to 5:3 ratio
import sh_2019 from '../assets/gallery/sh_2019_edit.png';
import sh_2018 from '../assets/gallery/sh_2018_edit.png';
import guh_sample from '../assets/gallery/guh_sample.jpg';

const AboutUs = styled.div`
  color: white;
  font-size: 2vw;
  padding: 20px 10% 20px 10%;
  @media (max-width: 768px) {
    font-size: 3vw;
  }
  @media (max-width: 430px) {
    font-size: 4vw;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <div className="section-black">
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
                  <Hero />
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
          <Team />
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
