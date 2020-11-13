import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProjectDetail from '@app/containers/ProjectDetailPage';
import Projects from '@app/containers/ProjectsPage';
import Settings from '@app/containers/SettingsPage';
import Tasks from '@app/containers/TasksPage';
import Documents from '@app/containers/DocumentsPage';
import UserManagement from '@app/containers/UserManagementPage';
import RoleManagement from '@app/containers/RoleManagementPage';
import routes from '@app/constants/routes.json';
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
          <Route path={routes.USER_MANAGEMENT} component={UserManagement} />
          <Route path={routes.ROLE_MANAGEMENT} component={RoleManagement} />
        </Switch>
      </div>
    </div>
  );
}
