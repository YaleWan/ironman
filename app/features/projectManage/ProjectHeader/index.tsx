import { Popover } from 'antd';
import React from 'react';

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
}

const ProjectHeader: React.FC<IProps> = ({
  openExplorer,
  workspace,
  projectCont,
}) => {
  return (
    <div className={style.projectHeader}>
      <div className={style.headerLeft}>
        项目管理
        <span> ({projectCont}) </span>
        <Popover content="当前项目的数量" placement="right">
          <QuestionCircleOutlined />
        </Popover>
      </div>
      <div className={style.headerRight}>
        <span>
          当前工作区：
          {workspace}
        </span>
        <ReloadOutlined />
        <FolderOpenOutlined onClick={() => openExplorer()} />
      </div>
    </div>
  );
};
export default ProjectHeader;
