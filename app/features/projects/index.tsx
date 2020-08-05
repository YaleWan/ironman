import React, { useState, memo } from 'react';
import { Drawer, Form, Input, Button, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import routes from '@app/constants/routes.json';
import ProjectHeader from './ProjectHeader';
import ProjectCard from './projectCard';
import style from './index.scss';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const Projects: React.FC = () => {
  const [createProjectVisible, setCreateProjectVisible] = useState(false);
  const history = useHistory();
  // 点击新建项目
  const handleCreateProject = () => {
    setCreateProjectVisible(true);
  };
  const onCloseProjectDrawer = () => {
    setCreateProjectVisible(false);
  };
  const createProject = (fromModel) => {
    console.log('111 :>> ', fromModel);
  };

  const openProjectDetail = (projectId: number) => {
    history.push(`${routes.PROJECT_DETAIL}/${projectId}`);
  };
  const map = [1, 2];
  return (
    <div>
      <ProjectHeader createProject={handleCreateProject} />
      <div className={style.projectContanier}>
        {map.map((item) => (
          <div onClick={() => openProjectDetail(item)} key={item}>
            <ProjectCard />
          </div>
        ))}
      </div>

      <Drawer
        title="创建项目"
        placement="right"
        closable={false}
        onClose={onCloseProjectDrawer}
        visible={createProjectVisible}
        width="500"
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={createProject}
          // validateMessages={validateMessages}
        >
          <Form.Item
            name={['project', 'name']}
            label="项目名"
            rules={[{ required: true, message: '项目名必须填写' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['project', 'introduction']} label="项目简介">
            <Input.TextArea />
          </Form.Item>
          <Form.Item label="关联仓库" name={['project', 'remote']}>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="负责人" name={['project', 'principal']}>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="成员" name={['project', 'member']}>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
            <Button type="primary" htmlType="submit">
              新建
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default memo(Projects);
