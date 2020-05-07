import React from 'react';
import team from '../assets/team/people';

const memberDisplay = (team) =>
  team.map((teamMember) => (
    <div key={teamMember.name} className="grid-item-home">
      <img className="team-pic" src={teamMember.img} alt="" />
      <figcaption className="text">
        <h4>{teamMember.name}</h4>
        <h5>{teamMember.role}</h5>
      </figcaption>
    </div>
  ));

export function Team() {
  return <div className="grid-container-home">{memberDisplay(team)}</div>;
}
