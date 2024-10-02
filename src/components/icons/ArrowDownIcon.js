import React from 'react';

function ArrowDownIcon({ width = '1.3rem', height = '1.3rem' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M16.707 13.293a1 1 0 0 0-1.414 0L13 15.586V8a1 1 0 1 0-2 0v7.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414L12 19.414l4.707-4.707a1 1 0 0 0 0-1.414"
      />
    </svg>
  );
}

export default ArrowDownIcon;
