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
  const options = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
  };
  const options2 = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 10,
      data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '16',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 335, name: '直接访问' },
          { value: 310, name: '邮件营销' },
          { value: 234, name: '联盟广告' },
          { value: 135, name: '视频广告' },
          { value: 1548, name: '搜索引擎' },
        ],
      },
    ],
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
            <div>
              <TaskCompletionRatesPie
                width="350px"
                height="350px"
                options={options}
              />
            </div>
            <div className={style.chartsPie}>
              <TaskCompletionRatesPie
                width="150px"
                height="150px"
                options={options2}
              />
              <TaskCompletionRatesPie
                width="150px"
                height="150px"
                options={options2}
              />
              <TaskCompletionRatesPie
                width="150px"
                height="150px"
                options={options2}
              />
              <TaskCompletionRatesPie
                width="150px"
                height="150px"
                options={options2}
              />
            </div>
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
