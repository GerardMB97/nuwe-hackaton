/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/input';
import Layout from '../components/layout';
import titleData from '../constants/title';
import inputData from '../constants/inputs';
import errors from '../constants/errors';
import NextStepButton from '../components/nextStepButton';
import googleIcon from '../assets/img/google.png';
import * as styles from './firstStep.module.css';

const nameValidator = (nameInput) => {
  const RegExpression = /^[a-zA-Z\s\u00f1\u00d1]*$/;
  return nameInput.length > 3 && RegExpression.test(nameInput);
};
const emailValidator = (emailInput) => {
  const RegExpression = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return RegExpression.test(emailInput);
};

const passwordValidator = (pwdInput) => {
  const RegExpression = /^(?=.*[A-Za-z\u00f1\u00d1])(?=.*\d)[A-Za-z\d\u00f1\u00d1]{8,}$/;
  return RegExpression.test(pwdInput);
};

export default function FirstStep() {
  const { name, email, password } = inputData;
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const { nameError, emailError, passwordError } = errors;

  const areAllValid = nameValidator(nameInput)
  && emailValidator(emailInput)
  && passwordValidator(passwordInput);
  return (
    <Layout step={1} titleData={titleData.firstStep} isFinnished={false}>
      <Input
        error={nameError}
        id={name.id}
        label={name.label}
        placeholder={name.placeholder}
        state={nameInput}
        setState={setNameInput}
        validator={nameValidator}
      />
      <Input
        error={emailError}
        id={email.id}
        label={email.label}
        placeholder={email.placeholder}
        state={emailInput}
        setState={setEmailInput}
        validator={emailValidator}
      />
      <Input
        error={passwordError}
        id={password.id}
        label={password.label}
        placeholder={password.placeholder}
        state={passwordInput}
        setState={setPasswordInput}
        validator={passwordValidator}
      />
      <input className={styles.margin__bot} id="terms" type="checkbox" />
      <label htmlFor="terms">Acepto los términos y condiciones</label>
      <Link to="step2" className={areAllValid ? styles.link : styles.disabled}><NextStepButton text="Registrar cuenta" /></Link>
      <button className={styles['google-button']} type="button">
        <img src={googleIcon} alt="google icon" className={styles['google-icon']} />
        <p className={styles['google-text']}>Regístrate con Google</p>
      </button>
    </Layout>
  );
}
