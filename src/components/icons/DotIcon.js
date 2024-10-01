import React from 'react';

export function DotIcon({ width = '1.5rem', height = '1.5rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
    >
      <path
        fill="currentColor"
        d="M140 128a12 12 0 1 1-12-12a12 12 0 0 1 12 12"
      />
    </svg>
  );
}
