import React from 'react';

export function DotIcon({ width = '0.7rem', height = '0.7rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        d="M9.875 7.5a2.375 2.375 0 1 1-4.75 0a2.375 2.375 0 0 1 4.75 0"
      />
    </svg>
  );
}
