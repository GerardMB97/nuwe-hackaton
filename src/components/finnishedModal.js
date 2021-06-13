import React from 'react';
import * as styles from './finnishedModal.module.css';

export default function finnishedModal() {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>¡Todo guay!</h4>
      <p>Tu cuenta se ha creado correctamente</p>
      <div className={styles.flex}>
        <button className={styles.white__button} type="button">Cerrar</button>
        <button className={styles.black__button} type="button">Vamos para Nuwe</button>
      </div>
    </div>
  );
}
