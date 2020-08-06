import React, { useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Card, Layout } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Person from '@app/components/Person';
import ProjectDetailHeader from './ProjectDetailHeader';
import TasksForm from './TasksForm';
import style from './index.scss';
import TaskCompletionRatesPie from './TaskCompletionRatesPie';

const { Sider, Content } = Layout;
const ProjectDetail: React.FC<RouteComponentProps> = () => {
  const tasksFormRef = useRef(null);
  const onCreateTasks = () => {
    tasksFormRef.current.handleCreateProject();
  };
  return (
    <div>
      <ProjectDetailHeader createTasks={onCreateTasks} />
      <TasksForm ref={tasksFormRef} />
      <Layout className={style.projectDetail}>
        <Content>
          <div className={style.content}>
            <Card style={{ width: '35%' }}>
              <div>
                <span>仓库</span>
                <span>12</span>
              </div>
              <div>
                <span>成员</span>
                <span>34</span>
              </div>
            </Card>
            <Card style={{ width: '63%' }}>
              <div>
                <span>任务（未完成/全部）</span>
                <span>12</span>
              </div>
              <div>
                <span>里程碑</span>
                <span>34</span>
              </div>
              <div>
                <span>PR</span>
                <span>34</span>
              </div>
            </Card>
          </div>
          <div className={style.charts}>
            <TaskCompletionRatesPie />
            <TaskCompletionRatesPie />
            <TaskCompletionRatesPie />
            <TaskCompletionRatesPie />
          </div>
        </Content>
        <Sider className={style.sider}>
          <div className={style.memberHeader}>
            <span>项目成员</span>
            <div>
              <PlusOutlined />
            </div>
          </div>
          <div className={style.memberContent}>
            <Person name="yhwang" />
            <Person name="liwen" />
          </div>
        </Sider>
      </Layout>
    </div>
  );
};

export default ProjectDetail;
