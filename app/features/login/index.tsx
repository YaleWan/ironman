import React, { useState, useEffect } from 'react';
import { Tabs, Avatar, Input, Checkbox, Button, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { login } from '@app/services/user';
import style from './index.scss';
import LoginHeader from './LoginHeader';
import { setScreenSize } from '@app/utils/electronApi';
import {useHistory} from 'react-router-dom'
import routes from '@app/constants/routes.json';


const { TabPane } = Tabs;

export default function Login() {
  useEffect(() => {
    setScreenSize(300, 440);
  }, []);
  const history = useHistory()
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const onCheckBoxChange = () => {
    setIsAutoLogin(!isAutoLogin);
  };
  const userlogin = async () => {
    if (!account || !password) {
      return;
    }
    const params = { account, password };
    const data = await login(params);
    if (data.status === 200) {
      history.push(routes.HOME)
      setScreenSize(1100, 800);
    }
  };
  return (
    <>
      <LoginHeader />
      <div className={style.contanier}>
        <Tabs defaultActiveKey="2" centered>
          <TabPane tab="扫码登录" key="1">
            {/* TODO 微信扫码登录 */}
            敬请期待
          </TabPane>
          <TabPane tab="密码登录" key="2">
            <div className={style.passworldLogin}>
              <Avatar size={64} icon={<UserOutlined />} />
              <Input
                placeholder="请输入手机号码"
                value={account}
                onChange={(e) => setAccount(e.target.value)}
              />
              <Input
                placeholder="请输入密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className={style.autoLogin}>
              <div>
                <Checkbox checked={isAutoLogin} onChange={onCheckBoxChange}>
                  自动登录
                </Checkbox>
              </div>
              <div>
                <Button type="link">忘记密码</Button>
                <Divider type="vertical" />
                <Button type="link">新用户注册</Button>
              </div>
            </div>
            <Button type="primary" block onClick={userlogin}>
              登录
            </Button>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
}
