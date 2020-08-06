import { Popover, Button } from 'antd';
import React, { memo } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import style from './index.scss';

interface IProps {
  createTasks: () => void;
}
const ProjectHeader: React.FC<IProps> = ({ createTasks }) => {
  return (
    <div className={style.projectHeader}>
      <div className={style.headerLeft}>项目名</div>
      <div className={style.headerRight}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          shape="round"
          onClick={createTasks}
        >
          新建任务
        </Button>
      </div>
    </div>
  );
};
export default memo(ProjectHeader);
