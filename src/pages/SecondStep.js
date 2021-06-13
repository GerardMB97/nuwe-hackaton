import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../components/input';
import Layout from '../components/layout';
import titleData from '../constants/title';
import inputData from '../constants/inputs';
import NextStepButton from '../components/nextStepButton';
import errors from '../constants/errors';
import * as styles from './secondStep.module.css';

const phoneValidator = (phoneInput) => {
  const regEx = /^\d{9}$/;
  return regEx.test(phoneInput);
};

const countryValidator = (countryInput) => {
  const regEx = /^[a-zA-Z\s]*$/;
  return regEx.test(countryInput);
};

const addressValidator = (addressInput) => {
  const regEx = /[\w',-\\/.\s]/;
  return regEx.test(addressInput);
};

export default function SecondStep() {
  const [phoneInput, setPhoneInput] = useState('');
  const [addressInput, setAddressInput] = useState('');
  const [countryInput, setCountryInput] = useState('');
  const { phone, address, country } = inputData;
  const { phoneError, addressError, countryError } = errors;

  const areAllValid = phoneValidator(phoneInput)
  && countryValidator(countryInput)
  && addressValidator(addressInput);
  return (
    <Layout step={2} titleData={titleData.secondStep} isFinnished={false}>
      <Input
        error={phoneError}
        state={phoneInput}
        setState={setPhoneInput}
        id={phone.id}
        placeholder={phone.placeholder}
        label={phone.label}
        validator={phoneValidator}
      />
      <Input
        error={addressError}
        state={addressInput}
        setState={setAddressInput}
        id={address.id}
        placeholder={address.placeholder}
        label={address.label}
        validator={addressValidator}
      />
      <Input
        error={countryError}
        state={countryInput}
        setState={setCountryInput}
        id={country.id}
        placeholder={country.placeholder}
        label={country.label}
        validator={countryValidator}
      />
      <Link className={areAllValid ? styles.link : styles.disabled} to="step3"><NextStepButton text="Guardar y continuar" /></Link>
    </Layout>
  );
}
