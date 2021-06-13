import { number } from 'prop-types';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import * as styles from './navigationStyles.module.css';

export default function Navigation({ step }) {
  return (
    <div className={styles.container}>
      <Link to={step === 1 ? '/' : `step${step}`} type="button" className={styles.backLink}>
        <IoIosArrowBack className={styles.position__absolute} />
        Volver
      </Link>
      <span className={styles['page-info']}>
        <span className={styles.font__lighter}>{`Step 0${step}/03`}</span>
        <span>Personal Info</span>
      </span>
    </div>
  );
}

Navigation.propTypes = {
  step: number.isRequired
};
