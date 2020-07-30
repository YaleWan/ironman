import { readDir, readJson } from '@app/utils/file';
import { Popover } from 'antd';
import React, { useState, FC } from 'react';

import {
  QuestionCircleOutlined,
  FolderOpenOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import { openWorkSpace } from '@app/utils/electronApi';
import style from './index.scss';

export interface IProps {
  getProjectInfo: () => void;
}

const ProjectHeader: FC<IProps> = (props) => {
  const { getProjectInfo } = props;
  const [workspace, setWorkspace] = useState<string>('');

  const projectCount = 4;

  // 获取所有的项目信息
  function findAllProjectInfo(projects: string[]) {
    projects.forEach(async (project) => {
      try {
        const packageJson = await readJson(
          `${workspace}/${project}/package.json`
        );
        getProjectInfo(packageJson);
      } catch (error) {
        throw new Error(error);
      }
    });
  }
  // 查找当前工作区下所有的项目
  async function findAllProject(path: string) {
    const projects: string[] = await readDir(path);
    findAllProjectInfo(projects);
  }

  // 打开文档管理器
  async function openDialog() {
    const filePath: string = await openWorkSpace();
    setWorkspace(filePath);
    findAllProject(filePath);
  }

  return (
    <div className={style.projectHeader}>
      <div className={style.headerLeft}>
        项目管理
        <span> ({projectCount}) </span>
        <Popover content={123} placement="right">
          <QuestionCircleOutlined />
        </Popover>
      </div>
      <div className={style.headerRight}>
        <span>当前工作区：{workspace}</span>
        <ReloadOutlined />
        <FolderOpenOutlined onClick={openDialog} />
      </div>
    </div>
  );
};
export default ProjectHeader;
