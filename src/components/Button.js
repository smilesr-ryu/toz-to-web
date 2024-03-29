import React, { useState } from 'react';
import * as style from '../styles/mainStyle';
import CustomModal from './Modal';
import { clickCalc } from './calculator';

//이미지
import menu from '../image/ic-menu.png';
import del from '../image/del.svg'
import ball from '../image/ball.svg';

import ausCap from '../image/cap/ausCap.svg';
import ausTrophy from '../image/Trophy/ausTrophy.svg';
import ausBand from '../image/band/ausBand.svg';

import usCap from '../image/cap/usCap.svg';
import usTrophy from '../image/Trophy/usTrophy.svg';
import usBand from '../image/band/usBand.svg';

import rolCap from '../image/cap/rolCap.svg';
import rolTrophy from '../image/Trophy/rolTrophy.svg';
import rolBand from '../image/band/rolBand.svg';

import wimCap from '../image/cap/wimCap.svg';
import wimTrophy from '../image/Trophy/wimTrophy.svg';
import wimBand from '../image/band/wimBand.svg';

const Button = ({
  calc,
  setCalc,
  operation,
  setOperation,
  prevCalc,
  setPrevCalc,
  screen,
  setScreen,
  theme,
  setTheme
}) => {
  const [clear, setClear] = useState('AC');
  const clickBtn = e => {
    clickCalc(e, {
      calc,
      setCalc,
      operation,
      setOperation,
      prevCalc,
      setPrevCalc,
      screen,
      setScreen,
      theme,
      setClear
    });
  };

  //테마모달
  const [modalOpen, setModalOpen] = useState(false);
// console.log(modalOpen)
  const clickModal = () => {
    // modalOpen ? setModalOpen(false) : setModalOpen(true)
    setModalOpen(true);
  };
  const closeModal = (e) => {
    e.stopPropagation();
    setModalOpen(false);
  }

  const cap =
    theme === 'aus'
      ? ausCap
      : theme === 'us'
        ? usCap
        : theme === 'wimbledon'
          ? wimCap
          : rolCap;
  const band =
    theme === 'aus'
      ? ausBand
      : theme === 'us'
        ? usBand
        : theme === 'wimbledon'
          ? wimBand
          : rolBand;
  const Trophy =
    theme === 'aus'
      ? ausTrophy
      : theme === 'us'
        ? usTrophy
        : theme === 'wimbledon'
          ? wimTrophy
          : rolTrophy;

  const topbuttons = [
    { name: '+/-', value: 'plusminus', colortheme: theme },
    { name: '%', value: 'percent', colortheme: theme },
    { name: 'del', value: 'delete', src: del },
  ];

  const buttons = [
    { name: '7', value: '7' },
    { name: '8', value: '8' },
    { name: 'nine', value: '9', path: cap },
    { name: 'div', value: '÷', colortheme: theme },
    { name: 'equal', value: '=', colortheme: theme },
    { name: '4', value: '4' },
    { name: '5', value: '5' },
    { name: '6', value: '6' },
    { name: 'mul', value: 'x', colortheme: theme },
    { name: 'one', value: '1', path: Trophy },
    { name: '2', value: '2' },
    { name: '3', value: '3' },
    { name: 'minus', value: '-', colortheme: theme },
    { name: '0', value: '0' },
    { name: 'doubleZero', value: '00', path: band },
    { name: 'dot', value: '.' },
    { name: 'plus', value: '+', colortheme: theme },
  ];

  return (
    <style.ButtonContainer>
      <style.ACButton onClick={clickBtn} path={ball} value="AC">
        {clear}
      </style.ACButton>
      {topbuttons.map(el => (
        <style.CalButton
          onClick={clickBtn}
          colortheme={theme}
          value={el.value}
          key={el.value}
          path={el.path ? el.path : null}
        >
          {el.value === 'delete' ? (
            <span>
              <img src={del} alt={el.value} />
            </span>
          ) : (
            el.name
          )}
        </style.CalButton>
      ))}
      <style.Button
        onClick={clickModal}
        className="theme"
        value="theme"
        colortheme={theme}
      >
        <span onClick={clickModal} value="theme">
          <img onClick={clickModal} value="theme" src={menu} alt="theme" />
        </span>
        {modalOpen ? (
          <CustomModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setTheme={setTheme}
            theme={theme}
            closeModal={closeModal}
          />
        ) : null}
      </style.Button>

      {buttons.map(el =>
        el.name === 'nine' || el.name === 'doubleZero' ? (
          <style.Button
            onClick={clickBtn}
            className={el.name}
            value={el.value}
            key={el.name}
          >
            <style.ImageBtn
              className={el.name}
              path={el.path}
              value={el.value}
            />
            {el.value}
          </style.Button>
        ) : el.colortheme ? (
          <style.CalButton
            onClick={clickBtn}
            colortheme={el.colortheme}
            className={el.name}
            value={el.value}
            key={el.name}
          >
            {el.value}
          </style.CalButton>
        ) : (
          <style.Button
            onClick={clickBtn}
            className={el.name}
            value={el.value}
            key={el.name}
            path={el.path ? el.path : null}
            theme={el.path ? theme : null}
          >
            {el.value}
          </style.Button>
        ),
      )}
    </style.ButtonContainer>
  );
};

export default Button;
