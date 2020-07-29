import React from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar } from 'antd';
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
        <Avatar src="https://avatars2.githubusercontent.com/u/42661750" />
        <div className={style.menuItem}>
          <AppstoreOutlined onClick={jumpTo} />
          项目管理
        </div>
      </div>
    </div>
  );
}
