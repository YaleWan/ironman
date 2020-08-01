import React, { useState } from 'react';
import { Select, Button, Table, Space, Input, Tag } from 'antd';
import { IProjectInfo } from '../index';

const { Option } = Select;
const { Search } = Input;

interface IProps {
  tableData: Array<IProjectInfo>;
}

const LocalProject: React.FC<IProps> = ({ tableData }) => {
  const [projectName, setProjectName] = useState<string>('');
  const [projectType, setProjectType] = useState<string>('');

  // 重置
  function reset() {
    setProjectName('');
    setProjectType('');
  }
  function search() {}
  function generateProjectTag(dependencies: { [propName: string]: string }) {
    interface ITag {
      type: string;
      color: string;
    }
    const result: Array<ITag> = [];
    const tagMap = [
      { type: 'vue', color: '#3fb984' },
      { type: 'react', color: '#61dafb' },
      { type: 'typescript', color: '#294e80' },
    ];
    for (const dep of Object.keys(dependencies)) {
      tagMap.forEach((tag) => {
        if (dep.includes(tag.type)) {
          result.push(tag);
        }
      });
    }
    const tags = [...new Set(result)];
    return tags.map((tag) => (
      <Tag color={tag.color} key={tag.type}>
        {tag.type}
      </Tag>
    ));
  }
  const SearchForm = (
    <div>
      <Select
        defaultValue=""
        value={projectType}
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
      <Button type="primary" onClick={search} style={{ marginRight: '30px' }}>
        查询
      </Button>
      <Button type="primary" onClick={reset}>
        重置
      </Button>
    </div>
  );
  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line react/display-name
      render: (text: string) => <Button type="link">{text}</Button>,
    },

    {
      title: '项目类型',
      key: 'dependencies',
      dataIndex: 'dependencies',
      render: generateProjectTag,
    },
    {
      title: '描述',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: '作者',
      dataIndex: 'author',
      key: 'author',
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

  return (
    <div>
      {SearchForm}
      <Table columns={columns} dataSource={tableData} rowKey="name" />
    </div>
  );
};

export default LocalProject;
