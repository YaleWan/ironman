import React, { useState, useEffect } from 'react';
import { Tabs, Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './index.scss';
import LoginHeader from './LoginHeader';

const { TabPane } = Tabs;

const { remote } = require('electron');

export default function Login() {
  useEffect(() => {
    remote.getCurrentWindow().setSize(300, 440);
  }, []);
  const [tel, setTel] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <LoginHeader />
      <div className={style.contanier}>
        <Tabs defaultActiveKey="2" centered>
          <TabPane tab="扫码登录" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="密码登录" key="2">
            <div className={style.passworldLogin}>
              <Avatar size={64} icon={<UserOutlined />} />
              <Input
                placeholder="请输入手机号码"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
              />
              <Input
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}
