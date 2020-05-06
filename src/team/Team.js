import React, { useState, useEffect } from 'react';

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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('/assets/people.json')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setIsLoaded(true);
          setTeam(result.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <div className="grid-container-home">{memberDisplay(team)}</div>;
  }
}
