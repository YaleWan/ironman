import React from 'react';
import {useHistory} from 'react-router-dom'
import style from './index.scss'
import {Avatar} from 'antd'
import {AppstoreOutlined} from '@ant-design/icons';

export default function Sidebar():JSX.Element{
  const history = useHistory()
  const jumpTo = ()=>{
    history.push('/home/menu')
  }
  return (
    <div>
      <div className={style.sidebar}>
      <Avatar src="https://avatars2.githubusercontent.com/u/42661750" />
      <div className={style.menuItem} onClick={jumpTo}>
      <AppstoreOutlined />
        项目管理
      </div>
      </div>
    </div>
  )
}
