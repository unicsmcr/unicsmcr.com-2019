import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare } from '@fortawesome/free-solid-svg-icons';

export function SocialIcon(props) {
  return (
    <a
      className="social-icon"
      target="_blank"
      rel="noopener noreferrer"
      href={props.url}
    >
      <div className="fa-2x">
        <span className="fa-layers fa-fw">
          <FontAwesomeIcon icon={faSquare} color="rgb(142, 49, 190)" />
          <FontAwesomeIcon
            icon={['fab', props.socialIconName]}
            transform="shrink-6"
            className="social-logo"
          />
        </span>
      </div>
    </a>
  );
}
