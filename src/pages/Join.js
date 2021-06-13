import React, { useState } from 'react';
import Layout from '../components/layout';
import AccountCard from '../components/accountCard';
import titleData from '../constants/title';
import * as styles from './join.module.css';

export default function Join() {
  const [selectedCard, setSelectedCard] = useState();
  return (
    <Layout titleData={titleData.join} step={0} isFinnished={false}>
      <AccountCard
        accountType="user"
        isSelected={selectedCard === 'user'}
        setSelectedCard={setSelectedCard}
      />
      <AccountCard
        accountType="business"
        isSelected={selectedCard === 'business'}
        setSelectedCard={setSelectedCard}
      />
      <p className={styles.login}>
        Ya tienes cuenta?
        {' '}
        <span className={styles.login__green}>Inicia sesión</span>
      </p>
    </Layout>
  );
}
