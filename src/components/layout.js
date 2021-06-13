import React from 'react';
import {
  bool,
  node, number, shape, string
} from 'prop-types';
import Navigation from './navigation';
import * as styles from './layoutStyles.module.css';
import Title from './title';
import FinnishedModal from './finnishedModal';

export default function Layout({
  children, step, titleData, isFinnished
}) {
  return (
    <div className={isFinnished ? styles.darker__container : styles.container}>
      {isFinnished && <FinnishedModal />}
      <div className={styles['desktop-img']}>
        <p className={styles['desktop-text']}>
          Nuwe es la plataforma que convierte el desarrollo profesional,
          la búsqueda de trabajo y las conexiones de personas y empresas en
          un juego Haciendoque puedas centrarte en lo que te gusta, programar,
          diseñar, crear, planear...
        </p>

      </div>
      <div className={styles['inputs-container']}>
        {step ? <Navigation step={step} /> : <div className={styles['nav-replace']} />}
        <div className={styles.inputs}>
          <Title info={titleData.info} title={titleData.title} />
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: node.isRequired,
  step: number.isRequired,
  titleData: shape({
    info: string,
    title: string
  }).isRequired,
  isFinnished: bool.isRequired
};
