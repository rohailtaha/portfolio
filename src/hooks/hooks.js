import { useCallback, useMemo, useState } from 'react';

export function useFormFeedback() {
  const [formFeedback, setFormFeedback] = useState(null);

  const setError = useCallback((message, interval) => {
    setFormFeedback({ type: 'error', message });
    if (interval) {
      setTimeout(() => {
        setFormFeedback(null);
      }, interval);
    }
  }, []);

  const setSuccess = useCallback((message, interval) => {
    setFormFeedback({ type: 'success', message });
    if (interval) {
      setTimeout(() => {
        setFormFeedback(null);
      }, interval);
    }
  }, []);

  const resetFeedback = useCallback(() => setFormFeedback(null), []);

  return useMemo(
    () => ({
      formFeedback,
      setError,
      setSuccess,
      resetFeedback,
    }),
    [formFeedback, resetFeedback, setError, setSuccess]
  );
}
