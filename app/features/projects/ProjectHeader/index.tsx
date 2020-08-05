import { Popover, Button } from 'antd';
import React, { memo } from 'react';
import { QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons';
import style from './index.scss';

interface IProps {
  createProject: () => void;
}
const ProjectHeader: React.FC<IProps> = ({ createProject }) => {
  return (
    <div className={style.projectHeader}>
      <div className={style.headerLeft}>
        项目管理
        <Popover content="当前工作区下项目的数量" placement="right">
          <QuestionCircleOutlined />
        </Popover>
      </div>
      <div className={style.headerRight}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="round"
          onClick={createProject}
        >
          创建项目
        </Button>
      </div>
    </div>
  );
};
export default memo(ProjectHeader);
