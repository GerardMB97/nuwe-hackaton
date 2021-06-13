import { string } from 'prop-types';
import React from 'react';
import * as styles from './title.module.css';

export default function Title({ title, info }) {
  return (
    <div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.info}>{info}</p>
    </div>
  );
}

Title.propTypes = {
  title: string.isRequired,
  info: string.isRequired
};
