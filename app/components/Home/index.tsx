import React from 'react';
import projectManage from '@app/features/projectManage';
import { Switch, Route } from 'react-router-dom';
import routes from '../../constants/routes.json';
import style from './index.scss';
import Sidebar from '../Sidebar';

export default function Home(): JSX.Element {
  return (
    <div className={style.container} data-tid="container">
      {/* <Link to={routes.LOGIN}>to login </Link> */}
      <Sidebar />
      <div className={style.content}>
        <Switch>
          <Route path={routes.PROJECT} component={projectManage} />
        </Switch>
      </div>
    </div>
  );
}
