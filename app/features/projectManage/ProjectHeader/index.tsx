import { Popover } from 'antd';
import React, { memo } from 'react';

import {
  QuestionCircleOutlined,
  FolderOpenOutlined,
  ReloadOutlined,
} from '@ant-design/icons';
import style from './index.scss';

interface IProps {
  workspace: string;
  projectCont: number;
  openExplorer: () => void;
  findAllProject: () => void;
}

const ProjectHeader: React.FC<IProps> = ({
  openExplorer,
  workspace,
  projectCont,
  findAllProject,
}) => {
  return (
    <div className={style.projectHeader}>
      <div className={style.headerLeft}>
        项目管理
        <span> ({projectCont}) </span>
        <Popover content="当前工作区下项目的数量" placement="right">
          <QuestionCircleOutlined />
        </Popover>
      </div>
      <div className={style.headerRight}>
        <span>
          当前工作区：
          {workspace}
        </span>
        <ReloadOutlined onClick={() => findAllProject()} />
        <FolderOpenOutlined onClick={() => openExplorer()} />
      </div>
    </div>
  );
};
export default memo(ProjectHeader);
