import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Tooltip } from 'antd';
import * as Icon from '@ant-design/icons';
import style from './index.scss';

export default function Sidebar(): JSX.Element {
  const [active, setActive] = useState('/home/project');
  const history = useHistory();
  const jumpTo = (path: string) => {
    history.push(path);
    setActive(path);
  };
  const menus = [
    {
      title: '工作台',
      icon: 'AppstoreFilled',
      path: '/home',
    },
    {
      title: '项目管理',
      icon: 'BookFilled',
      path: '/home/projects',
    },
    {
      title: '任务管理',
      icon: 'CarryOutFilled',
      path: '/home/tasks',
    },
    {
      title: '文档管理',
      icon: 'ReadFilled',
      path: '/home/documents',
    },
    {
      title: '管理中心',
      icon: 'SettingFilled',
      path: '/home/settings',
    },
  ];

  return (
    <div>
      <div className={style.sidebar}>
        <Avatar src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif" />
        {menus.map((menu) => (
          <div
            className={`${style.menuItem} ${
              active === menu.path ? style.activeMenu : null
            }`}
            key={menu.icon}
            onClick={() => jumpTo(menu.path)}
          >
            <Tooltip title={menu.title} placement="right">
              {React.createElement(Icon[menu.icon])}
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}
