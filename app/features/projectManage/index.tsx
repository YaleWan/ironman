import React, { useState } from 'react';
import { Tabs, Input, Select, Button, Table, Tag, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import ProjectHeader from './ProjectHeader';
import style from './index.scss';

const { TabPane } = Tabs;
const { Option } = Select;
const { Search } = Input;

export default function ProjectManage(): JSX.Element {
  const [projectName, setProjectName] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('');
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
  const columns = [
    {
      title: '项目名称',
      dataIndex: 'projectName',
      key: 'projectName',
      // eslint-disable-next-line react/display-name
      render: (text: string) => <Button type="link">{text}</Button>,
    },
    {
      title: '项目类型',
      key: 'projectType',
      dataIndex: 'projectType',
      // eslint-disable-next-line react/display-name
      render: (tags: Array<string>) => (
        <>
          {tags.map((tag: string) => {
            let color = '';
            switch (tag) {
              case 'vue':
                color = '#3fb984';
                break;
              case 'react':
                color = '#61dafb';
                break;
              case 'typescript':
                color = '#294e80';
                break;
              default:
                break;
            }
            return (
              <Tag color={color} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '描述',
      dataIndex: 'projectDesc',
      key: 'projectDesc',
    },

    {
      title: 'Action',
      key: 'action',
      // eslint-disable-next-line react/display-name
      render: () => (
        <Space size="middle">
          <Button type="link">编辑器打开</Button>
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      projectName: 'vue',
      projectType: ['vue', 'typescript'],
      projectDesc: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      projectName: 'react',
      projectType: ['react'],
      projectDesc: 'London No. 1 Lake Park',
    },
  ];

  return (
    <div>
      <ProjectHeader />
      <div className={style.contanier}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="本地项目管理" key="localProject">
            {SearchForm}
            <Table columns={columns} dataSource={data} />
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
