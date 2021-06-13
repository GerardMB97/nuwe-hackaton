import React from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import AccountIcon from './accountIcon';
import * as styles from './accountCard.module.css';
import cardInfo from '../constants/accountCardInfo';

export default function AccountCard({ accountType, isSelected, setSelectedCard }) {
  const info = accountType === 'user' ? cardInfo.user : cardInfo.business;
  const title = accountType === 'user' ? 'Developers' : 'Business';
  const cardClass = isSelected ? styles.card__selected : styles.container;

  return (
    !isSelected
      ? (
        <button type="button" className={cardClass} onClick={() => setSelectedCard(accountType)}>
          <AccountIcon isSelected={isSelected} accountType={accountType} />
          <div className={styles.info}>
            <h5 className={styles['account-type']}>{title}</h5>
            <p className={styles['info-text']}>{info}</p>
          </div>
        </button>
      )
      : (
        <Link className={styles.link} to="step1">
          <div className={cardClass}>
            <AccountIcon isSelected={isSelected} accountType={accountType} />
            <div className={styles.info}>
              <h5 className={styles['account-type']}>{title}</h5>
              <p className={styles['info-text']}>{info}</p>
            </div>
            <FiArrowRight className={styles.arrow} />
          </div>
        </Link>
      )
  );
}

AccountCard.propTypes = {
  accountType: string.isRequired,
  isSelected: bool.isRequired,
  setSelectedCard: func.isRequired
};
