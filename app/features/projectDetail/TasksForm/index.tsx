import React, { useState, useImperativeHandle, forwardRef } from 'react';
import {
  Drawer,
  Form,
  Input,
  Select,
  Button,
  Col,
  Row,
  Space,
  DatePicker,
} from 'antd';
import BaseBraftEditor from '@app/components/BaseBraftEditor';

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
      title="新建任务"
      placement="right"
      closable={false}
      onClose={onCloseProjectDrawer}
      visible={createTaskVisable}
      width="800"
    >
      <Form
        name="nest-messages"
        onFinish={createProject}
        // validateMessages={validateMessages}
      >
        <Row gutter={16}>
          <Col span={16}>
            <Form.Item
              name={['task', 'name']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Input placeholder="标题" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={['task', 'type']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="task">
                <Select.Option value="task">任务</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name={['task', 'principal']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select placeholder="请选择负责人">
                <Select.Option value="task">任务</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={['task', 'tag']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select placeholder="请选择协作者">
                <Select.Option value="task">任务</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={['task', 'milestones']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="task" placeholder="请选择标签">
                <Select.Option value="task">标签</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Form.Item>
            <BaseBraftEditor />
          </Form.Item>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['task', 'warehouse']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="default">
                <Select.Option value="default">不关联仓库</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['task', 'milestones']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="default">
                <Select.Option value="default">无里程碑</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name={['task', 'branch']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="default">
                <Select.Option value="default">不关联分支</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={['task', 'priority']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Select defaultValue="default">
                <Select.Option value="default">无优先级</Select.Option>
                <Select.Option value="demand">需求</Select.Option>
                <Select.Option value="defect">缺陷</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name={['task', 'startDate']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={['task', 'endDate']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name={['task', 'endDate']}
              rules={[{ required: true, message: '项目名必须填写' }]}
            >
              <Input placeholder="预计工时 （小时）" />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            新建
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default forwardRef(TasksForm);
