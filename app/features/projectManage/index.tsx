import React, { useState } from 'react';
import { Tabs } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { openWorkSpace } from '@app/utils/electronApi';
import { readDir, readJson } from '@app/utils/file';
import ProjectHeader from './ProjectHeader';
import style from './index.scss';
import { selectProject, setProjects } from './projectSlice';
import LocalProject from './LocalProject';

const { TabPane } = Tabs;

export interface IProjectInfo {
  name: string;
  [propName: string]: any;
}

const ProjectManage: React.FC = () => {
  const [workspace, setWorkspace] = useState<string>('');

  const projects = useSelector(selectProject);
  const dispatch = useDispatch();

  // 获取项目信息
  function getProjectInfo(projectArr: Array<IProjectInfo>) {
    dispatch(setProjects(projectArr));
  }
  // 查找所有的项目信息
  async function findAllProjectInfo(projectDirs: string[], path: string) {
    const projectarr = [];

    for (const projectDir of projectDirs) {
      projectarr.push(readJson(`${path}/${projectDir}/package.json`));
    }

    getProjectInfo(await Promise.all(projectarr));
  }

  // 查找当前工作区下所有的项目
  async function findAllProject(path: string) {
    const projectDirs: string[] = await readDir(path);
    findAllProjectInfo(projectDirs, path);
  }

  // 打开资源管理器
  async function handleOpenExplorer() {
    const filePath: string = await openWorkSpace();
    setWorkspace(filePath);
    findAllProject(filePath);
  }

  return (
    <div>
      <ProjectHeader
        openExplorer={handleOpenExplorer}
        workspace={workspace}
        projectCont={projects.length}
      />
      <div className={style.contanier}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="本地项目管理" key="localProject">
            <LocalProject tableData={projects} />
          </TabPane>
          <TabPane tab="线上项目管理" key="remoteProject">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="项目概览" key="projectOverview">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default ProjectManage;
