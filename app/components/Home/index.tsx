import React from 'react';
import routes from '../../constants/routes.json';
import style from './index.scss';
import Sidebar from '../Sidebar';
import projectManage from '@app/features/projectManage';
import { Switch, Route } from 'react-router-dom';

export default function Home(props: any): JSX.Element {
  console.log('props :>> ', props);
  return (
    <div className={style.container} data-tid="container">
      {/* <Link to={routes.LOGIN}>to login </Link> */}
      <Sidebar />
      <div className={style.content}>
        <Switch>
          <Route path={routes.MENU} component={projectManage} />
        </Switch>
      </div>
    </div>
  );
}
