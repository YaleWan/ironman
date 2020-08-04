import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Tooltip } from 'antd';
import { AppstoreOutlined } from '@ant-design/icons';
import style from './index.scss';

export default function Sidebar(): JSX.Element {
  const history = useHistory();
  const jumpTo = () => {
    history.push('/home/project');
  };
  return (
    <div>
      <div className={style.sidebar}>
        <Avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" />
        <div className={style.menuItem}>
          <Tooltip title="项目管理" placement="right" color="#000">
            <AppstoreOutlined onClick={jumpTo} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
