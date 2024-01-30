import React, { useState } from 'react';
import * as style from '../styles/modalStyle';
import Modal from 'react-modal';
import PeriodModal from './PeriodModal';
import ModalPortal from '../ModalPortal';
import aus from '../image/logo/ausopen-logo2.svg';
import rol from '../image/logo/rolandgarros-logo.svg';
import us from '../image/logo/usopen-logo.svg';
import wim from '../image/logo/wimbledon-logo.svg';

const CustomModal = ({ modalOpen, setModalOpen, setTheme, theme }) => {
  const [periodModalOpen, setPeriodModalOpen] = useState(false);

  const openPeriodModal = (e) => {
    e.stopPropagation();
    setPeriodModalOpen(true);
  };

  const closePeriodModal = () => {
    setPeriodModalOpen(false);
  };

  const themes = [
    { name: 'aus', src: aus },
    { name: 'roland', src: rol },
    { name: 'wimbledon', src: wim },
    { name: 'us', src: us },
  ];

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleAutoTheme = () => {
    const periodDetail = JSON.parse(localStorage.getItem('period'));
    // console.log(periodDetail);

    const getThemePeriod = (date) => {
      const current = new Date(date);
      for(let i = 0 ; i < periodDetail.length; i++){
        const { startDate, endDate } = periodDetail[i];
        const parseStart = new Date(startDate);
        const parseEnd = new Date(endDate);

        if(current >= parseStart && current <= parseEnd){
          switch(i) {
            default: return null;
            case 0: return 'aus';
            case 1: return 'roland';
            case 2: return 'wimbledon';
            case 3: return 'us';
          }
        }
      }
      return null;
    }
    const currentDate = new Date();
    const themeDate = getThemePeriod(currentDate);
    // console.log(themeDate);
    setTheme(themeDate);
  }

  return (
    <>
      {modalOpen && (
        <ModalPortal>
          <Modal
            isOpen={modalOpen}
            onRequestClose={() => setModalOpen(false)}
            style={style.customModal}
            ariaHideApp={false}
            contentLabel="Choose the Theme"
            shouldCloseOnOverlayClick={true}
          >
            <style.Top>
              <div>
                <style.Title>자동설정</style.Title>
                <style.Content>해당기간 리그가 자동 변경됩니다.</style.Content>
                <style.AutoTheme onClick={handleAutoTheme} />
              </div>
              <style.Period onClick={openPeriodModal}>기간설정</style.Period>
              {periodModalOpen && (
                <PeriodModal
                  isOpen={periodModalOpen}
                  onRequestClose={closePeriodModal}
                />
              )}
            </style.Top>
            <style.Title>테마선택</style.Title>
            {themes.map(({ name, src }) => (
              <style.Theme
                key={name}
                src={src}
                onClick={() => {
                  changeTheme(name);
                }}
              ></style.Theme>
            ))}
          </Modal>
        </ModalPortal>
      )}
    </>
  );
};

export default CustomModal;
