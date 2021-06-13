import React from 'react';
import { bool, string } from 'prop-types';
import { FiUser, FiBriefcase } from 'react-icons/fi';
import greenPolygon from '../assets/img/PolygonGreen.png';
import polygon from '../assets/img/Polygon.png';
import * as styles from './accountIcon.module.css';

export default function AccountIcon({ accountType, isSelected }) {
  const polygonIcon = isSelected ? greenPolygon : polygon;
  const iconClass = isSelected ? styles.icon__selected : styles.position__absolute;
  return (
    <div className={styles.container}>
      <img src={polygonIcon} alt="polygon" />
      { accountType === 'user' ? <FiUser className={iconClass} /> : <FiBriefcase className={iconClass} />}
    </div>
  );
}

AccountIcon.propTypes = {
  accountType: string.isRequired,
  isSelected: bool.isRequired
};
