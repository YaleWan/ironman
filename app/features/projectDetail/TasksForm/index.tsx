import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { Drawer, Form, Input, Select, Button } from 'antd';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
const TasksForm = (props, ref) => {
  const [createTaskVisable, setCreateTaskVisable] = useState(false);
  useImperativeHandle(ref, () => ({
    handleCreateProject,
  }));
  const handleCreateProject = () => {
    setCreateTaskVisable(true);
  };
  const onCloseProjectDrawer = () => {
    setCreateTaskVisable(false);
  };
  const createProject = (fromModel) => {
    console.log('111 :>> ', fromModel);
  };
  return (
    <Drawer
      title="创建项目"
      placement="right"
      closable={false}
      onClose={onCloseProjectDrawer}
      visible={createTaskVisable}
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
  );
};

export default forwardRef(TasksForm);
