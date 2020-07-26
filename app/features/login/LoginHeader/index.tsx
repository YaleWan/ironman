import React from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import style from './index.scss';
import {
  minimizeWin,
  closeWin,
  setFullScreen,
} from '@app/utils/electronApi';

export default function LoginHeader() {
  return (
    <div className={style.loginHeader}>
      <div className={style.logo}>Armor</div>
      <div className={style.icon}>
        <MinusOutlined onClick={minimizeWin} />
        <BorderOutlined onClick={setFullScreen} />
        <CloseOutlined onClick={closeWin} />
      </div>
    </div>
  );
}
