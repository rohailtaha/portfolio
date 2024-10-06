import React from 'react';
import { CheckmarkIcon, CloseIcon } from './icons';

function SuccessFeedback({ text, resetFeedback }) {
  function handleCloseForm() {
    resetFeedback();
  }

  return (
    <div className="relative flex justify-start py-2 pl-2 pr-8 mt-3 bg-green-100 border border-green-700 rounded-lg cross-icon">
      <div className="text-green-700 flex-cb">
        <div className="flex-shrink-0">
          <CheckmarkIcon />
        </div>
        <p className="ml-2 text-sm">{text}</p>
      </div>
      <button
        className="absolute pb-1 pl-1 text-green-700 top-1 right-1"
        onClick={handleCloseForm}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default SuccessFeedback;
