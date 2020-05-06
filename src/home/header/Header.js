import React from 'react';
import styled from 'styled-components';

export const Header = styled.div`
  color: white;
  text-align: center;
  font-size: 3em;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export function Hero() {
  return (
    <div>
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
  );
}
