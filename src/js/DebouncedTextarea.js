import React, { useEffect, useState } from 'react';

const DebouncedInput = ({ className, defaultValue, callback, disabled }) => {
  const [term, setTerm] = useState(defaultValue);

  useEffect(() => {
    const delay = setTimeout(() => {
      callback(term);
    }, 1000);
    return () => clearTimeout(delay);
  }, [term]);

  return (
    <textarea
      type="text"
      disabled={disabled}
      className={className}
      defaultValue={term}
      onChange={e => setTerm(e.target.value)}
    ></textarea>
  );
};

export default DebouncedInput;
