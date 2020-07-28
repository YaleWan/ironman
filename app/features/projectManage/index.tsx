import React, { useState } from 'react';
import { Tabs, Input, Select, Button } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ProjectHeader from './ProjectHeader';
import style from './index.scss';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

export default function ProjectManage(): JSX.Element {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('');
  const callback = (key: string) => {
    console.log(key);
  };
  const SearchForm = (
    <div>
      <Select
        defaultValue={projectType}
        style={{ width: 150, marginRight: '30px' }}
        onChange={(value) => setProjectType(value)}
      >
        <Option value="">全部</Option>
        <Option value="vue">vue</Option>
        <Option value="react">react</Option>
      </Select>
      <Search
        style={{ width: 180, marginRight: '30px' }}
        placeholder="请输入项目的名称"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <Button type="primary">重置</Button>
    </div>
  );

  return (
    <div>
      <ProjectHeader />
      <div className={style.contanier}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="本地项目管理" key="localProject">
            {SearchForm}
          </TabPane>
          <TabPane tab="线上项目管理" key="remoteProject">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="项目概览" key="projectOverview">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
}
