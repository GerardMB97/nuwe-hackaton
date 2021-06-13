import { string } from 'prop-types';
import React from 'react';
import * as styles from './nextStepButton.module.css';

export default function nextStepButton({ text }) {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

nextStepButton.propTypes = {
  text: string.isRequired
};
