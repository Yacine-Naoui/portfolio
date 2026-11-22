import React from 'react';
import PropTypes from 'prop-types';

/*
  "YN" monogram. Geometry traced from the original artwork (1024 grid,
  60px round-capped strokes, three 40px dots). Letters use currentColor,
  the dots use the site accent and the tile the card surface, so the mark
  follows the theme automatically.
*/
const IconLogo = ({ tile }) => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 1024 1024"
    aria-hidden="true"
    focusable="false">
    <title>Yacine Naoui</title>
    {tile && (
      <rect
        className="tile"
        x="16"
        y="16"
        width="992"
        height="992"
        rx="210"
        fill="var(--bg-elevated)"
        stroke="var(--border)"
        strokeWidth="32"
      />
    )}
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="60"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M262 340 L361.5 500 L461 340 M361.5 500 V659" />
      <path d="M561.5 659 V340 L761.5 659 V340" />
    </g>
    <g className="dots" fill="var(--accent)">
      <circle cx="662" cy="232" r="40" />
      <circle cx="312" cy="768" r="40" />
      <circle cx="412" cy="768" r="40" />
    </g>
  </svg>
);

IconLogo.propTypes = {
  tile: PropTypes.bool,
};

IconLogo.defaultProps = {
  tile: true,
};

export default IconLogo;
