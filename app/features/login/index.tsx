import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes.json';
import style from './index.css';

const { remote } = require('electron');

export default function Login() {
  useEffect(() => {
    remote.getCurrentWindow().setSize(300, 440);
  });
  return (
    <div className={style.contanier}>
      <Link to={routes.HOME}>to home</Link>
      login
    </div>
  );
}
