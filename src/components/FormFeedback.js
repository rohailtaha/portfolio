import React from 'react';
import ErrorFeedback from './ErrorFeedback';
import SuccessFeedback from './SuccessFeedback';

function FormFeedback({ formFeedback, resetFeedback }) {
  return (
    <>
      {formFeedback.type === 'error' && (
        <ErrorFeedback
          text={formFeedback.message}
          resetFeedback={resetFeedback}
        />
      )}
      {formFeedback.type === 'success' && (
        <SuccessFeedback
          text={formFeedback.message}
          resetFeedback={resetFeedback}
        />
      )}
    </>
  );
}

export default FormFeedback;
