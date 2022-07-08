import React from 'react';

import { IconProps } from 'types/pokemon';

const Pokeball: React.FC<IconProps> = ({ width = 399, height = 399 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 399 399"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 196H392L382.729 151.462L348.374 80.6586L292.205 33.2659L210.952 7L120.428 24.7009L50.0807 80.6586L11.3626 158.885L7 196Z"
      fill="#EC1A23"
      stroke="black"
    />
    <path
      d="M7 199H392L382.729 243.538L348.374 314.341L292.205 361.734L210.952 388L120.428 370.299L50.0807 314.341L11.3626 236.115L7 199Z"
      fill="white"
      stroke="black"
    />
    <circle cx="199.5" cy="199.5" r="189" stroke="black" strokeWidth="21" />
    <line x1="18" y1="201" x2="380" y2="201" stroke="black" strokeWidth="28" />
    <path
      d="M263.5 199C263.5 234.689 234.78 263.5 199.5 263.5C164.22 263.5 135.5 234.689 135.5 199C135.5 163.311 164.22 134.5 199.5 134.5C234.78 134.5 263.5 163.311 263.5 199Z"
      fill="white"
      stroke="black"
      strokeWidth="21"
    />
    <circle cx="200" cy="199" r="27" fill="black" />
  </svg>
);

export default Pokeball;
