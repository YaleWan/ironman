import React from 'react';
import {
  MinusOutlined,
  BorderOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { minimizeWin, closeWin, setFullScreen } from '@app/utils/electronApi';
import style from './index.scss';

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
