import React, { useState, useEffect, useCallback, memo } from 'react';
import { Select, Button, Table, Space, Input, Tag, Form } from 'antd';
import { useHistory } from 'react-router-dom';
import routes from '@app/constants/routes.json';
import { IProjectInfo } from '../index';

type Project = Array<IProjectInfo>;
interface IProps {
  tableData: Project;
}
interface ITag {
  type: string;
  color: string;
}

const LocalProject: React.FC<IProps> = ({ tableData }) => {
  const [projectData, setProjectData] = useState<Project>([]);
  const history = useHistory();
  useEffect(() => {
    setProjectData(tableData);
  }, [tableData]);

  /**
   * @description 根据dependencies生成对应的项目语言
   * @author yhwang
   * @date 2020-08-04
   * @param {{ [propName: string]: string }} dependencies
   * @returns
   */
  function generateProjectTag(dependencies: { [propName: string]: string }) {
    if (!dependencies) {
      return [];
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

  const onFinish = useCallback((formModal) => {
    const filterData = tableData
      .filter((item) => item.name.includes(formModal.name))
      .filter((item) => {
        if (!formModal.type) {
          return true;
        }
        for (const dep of Object.keys(item.dependencies)) {
          if (dep.includes(formModal.type.toLowerCase())) {
            return true;
          }
        }
        return false;
      });

    setProjectData(filterData);
  }, []);

  const goProjectDetail = (text: string) => {
    history.push(`${routes.PROJECT_DETAIL}/${text}`);
  };

  const columns = [
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      // eslint-disable-next-line react/display-name
      render: (text: string) => (
        <Button type="link" onClick={() => goProjectDetail(text)}>
          {text}
        </Button>
      ),
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
      <Form layout="inline" onFinish={onFinish}>
        <Form.Item name="type">
          <Select style={{ width: 120 }}>
            <Select.Option value="">全部</Select.Option>
            <Select.Option value="Vue">Vue</Select.Option>
            <Select.Option value="React">React</Select.Option>
            <Select.Option value="Typescript">Typescript</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item name="name">
          <Input placeholder="请输入项目名称" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
        </Form.Item>
      </Form>
      <Table
        columns={columns}
        dataSource={projectData}
        rowKey="name"
        pagination={false}
      />
    </div>
  );
};

export default memo(LocalProject);
