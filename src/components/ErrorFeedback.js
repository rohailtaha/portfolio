import React from 'react';
import { CloseIcon, ErrorIcon } from './icons';

function ErrorFeedback({ text, resetFeedback }) {
  function handleCloseForm() {
    resetFeedback();
  }

  return (
    <div className="relative flex justify-start py-2 pl-2 pr-8 mt-3 bg-red-100 border border-red-700 rounded-lg cross-icon">
      <div className="text-red-700 flex-cb">
        <div className="flex-shrink-0">
          <ErrorIcon />
        </div>
        <p className="ml-2 text-sm">{text}</p>
      </div>
      <button
        className={'absolute top-1 right-1 pl-1 pb-1 text-red-700'}
        onClick={handleCloseForm}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default ErrorFeedback;
