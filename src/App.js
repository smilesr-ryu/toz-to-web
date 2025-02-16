import React, { useState } from 'react';
import * as style from './styles/mainStyle';

//이미지
import ausopenLogo from './image/logo/ausopen-logo.svg';
import usopenLogo from './image/logo/usopen-logo.svg';
import wimLogo from './image/logo/wimbledon-logo.svg';
import rolLogo from './image/logo/rolandgarros-logo.svg';

import GlobalStyles from './styles/globalStyles';

//component
import Screen from './components/Screen';
import Button from './components/Button';
import { IconButton } from '@mui/material';

import LoginIcon from '@mui/icons-material/Login';
import { useDialogStore } from './states/useDialogStore';
import Login from './components/Login';
function App() {
  // theme
  const [theme, setTheme] = useState(() => {
    // 로컬 스토리지에서 테마 정보 불러오기, 없으면 기본값 'aus'
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || 'aus';
  });
  // const theme = ['aus', 'us', 'wimbledon', 'roland'];
  const logo =
    theme === 'aus'
      ? ausopenLogo
      : theme === 'us'
        ? usopenLogo
        : theme === 'wimbledon'
          ? wimLogo
          : rolLogo;

  //calc
  const [screen, setScreen] = useState('');
  const [calc, setCalc] = useState('0');
  const [prevCalc, setPrevCalc] = useState(0);
  const [operation, setOperation] = useState('');

  const isOpen = useDialogStore(state => state.isOpen);
  const openDialog = useDialogStore(state => state.openDialog);
  const closeDialog = useDialogStore(state => state.closeDialog);

  return (
    <style.AppContainer colortheme={theme}>
      <GlobalStyles />

      <style.MainContainer colortheme={theme}>
        <style.LogoDiv>
          <div></div>
          <style.LogoImg src={logo} alt="logo" />
          <IconButton onClick={openDialog}>
            <LoginIcon />
          </IconButton>
        </style.LogoDiv>
        <Screen calc={calc} screen={screen} theme={theme} />
        <Button
          calc={calc}
          setCalc={setCalc}
          operation={operation}
          setOperation={setOperation}
          prevCalc={prevCalc}
          setPrevCalc={setPrevCalc}
          screen={screen}
          setScreen={setScreen}
          theme={theme}
          setTheme={setTheme}
        />
      </style.MainContainer>
      <style.Line className="firstLine" />
      <style.Line className="secondLine" />
      <style.Line className="thirdLine" />
      <style.Line className="fourthLine" />
      <style.Line className="fifthLine" />
      <style.RowLine className="firstLine" />
      <style.RowLine className="secondLine" />
      <style.RowLine className="thirdLine" />
      {isOpen && <Login open={isOpen} closeDialog={closeDialog} />}
    </style.AppContainer>
  );
}

export default App;
