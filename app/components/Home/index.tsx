import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectDetail from '@app/features/projectDetail';
import Projects from '@app/features/projects';
import Settings from '@app/features/settings';
import Tasks from '@app/features/tasks';
import Documents from '@app/features/documents';
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
          <Route
            path={`${routes.PROJECT_DETAIL}/:name`}
            component={ProjectDetail}
          />
          <Route path={routes.PROJECTS} component={Projects} />
          <Route path={routes.SETTINGS} component={Settings} />
          <Route path={routes.TASKS} component={Tasks} />
          <Route path={routes.DOCUMENTS} component={Documents} />
        </Switch>
      </div>
    </div>
  );
}
