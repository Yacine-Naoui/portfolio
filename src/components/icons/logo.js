import React from 'react';

// Terminal-prompt monogram: a rounded frame with a ">" chevron and a cursor bar
const IconLogo = () => (
  <svg
    id="logo"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 64 64"
    aria-hidden="true"
    focusable="false">
    <title>Yacine Naoui</title>
    <rect
      x="6"
      y="6"
      width="52"
      height="52"
      rx="12"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
    />
    <polyline
      points="19,23 30,32 19,41"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="34"
      y1="41"
      x2="45"
      y2="41"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
    />
  </svg>
);

export default IconLogo;
