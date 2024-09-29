import React from 'react';

function ArrowRightIcon({ width = '1.5rem', height = '1.5rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="m18 8l4 4m0 0l-4 4m4-4H2"
      />
    </svg>
  );
}

export default ArrowRightIcon;
