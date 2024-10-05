import React from 'react';

export function ViewProjectIcon({ width = '1.5rem', height = '1.5rem' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.45"
        d="M10 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4m-8-2l8-8m0 0v5m0-5h-5"
      />
    </svg>
  );
}
