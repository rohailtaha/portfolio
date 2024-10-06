import React from 'react';

export function CheckmarkIcon({ width = '2em', height = '2em' }) {
  return (
    <svg
      className="text-green-800 checkmark-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
