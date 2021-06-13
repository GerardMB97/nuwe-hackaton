/* eslint-disable jsx-a11y/label-has-associated-control */
import { func, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import * as styles from './input.module.css';

export default function Input({
  placeholder, id, label, state, setState, validator, error
}) {
  const [isValid, setIsValid] = useState(false);
  const [className, setClassName] = useState(styles.input);

  useEffect(() => {
    setIsValid(validator(state));
  }, [state]);

  useEffect(() => {
    if (state.length === 0) {
      setClassName(styles.input);
    } else if (isValid) {
      setClassName(styles.right);
    } else {
      setClassName(styles.wrong);
    }
  }, [isValid, state]);

  return (
    <div className={styles.container}>
      <label htmlFor={id} />
      {label}
      <input
        value={state}
        className={className}
        id={id}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
      {className === styles.wrong && <p className={styles.error}>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  placeholder: string.isRequired,
  id: string.isRequired,
  label: string.isRequired,
  state: string.isRequired,
  setState: func.isRequired,
  validator: func.isRequired,
  error: string.isRequired
};
