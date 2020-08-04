import React from 'react';
import ProjectManage from '@app/features/projectManage';
import { Switch, Route } from 'react-router-dom';
import ProjectDetail from '@app/features/projectManage/projectDetail';
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
          <Route path={routes.PROJECT} component={ProjectManage} />
          <Route
            path={`${routes.PROJECT_DETAIL}/:name`}
            component={ProjectDetail}
          />
        </Switch>
      </div>
    </div>
  );
}
