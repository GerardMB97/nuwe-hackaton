/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import Input from '../components/input';
import Layout from '../components/layout';
import titleData from '../constants/title';
import inputsData from '../constants/inputs';
import NextStepButton from '../components/nextStepButton';
import errors from '../constants/errors';
import * as styles from './thirdStep.module.css';

const cardValidator = (cardInput) => {
  const regEx = /^\d{16}$/;
  return regEx.test(cardInput);
};

const secretValidator = (secretInput) => {
  const regEx = /^\d{3}$/;
  return regEx.test(secretInput);
};

const handleClick = (card, secret, setter) => {
  if (cardValidator(card) && secretValidator(secret)) {
    setter(true);
  }
};
export default function ThirdStep() {
  const [cardInput, setCardInput] = useState('');
  const [secretInput, setSecretInput] = useState('');
  const { card, secretNumber } = inputsData;
  const [isFinnished, setIsFinnished] = useState(false);
  const { cardError, secretError } = errors;
  return (
    <Layout step={3} titleData={titleData.thirdStep} isFinnished={isFinnished}>
      <Input
        error={cardError}
        id={card.id}
        placeholder={card.placeholder}
        label={card.label}
        state={cardInput}
        setState={setCardInput}
        validator={cardValidator}
      />
      <Input
        error={secretError}
        id={secretNumber.id}
        placeholder={secretNumber.placeholder}
        label={secretNumber.label}
        state={secretInput}
        setState={setSecretInput}
        validator={secretValidator}
      />
      <button
        className={styles.width}
        type="button"
        onClick={() => handleClick(cardInput, secretInput, setIsFinnished)}
      >
        <NextStepButton text="Crear cuenta" />

      </button>
    </Layout>
  );
}
