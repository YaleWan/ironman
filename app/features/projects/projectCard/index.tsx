import React from 'react';
import { Card, Avatar } from 'antd';
import {
  UserOutlined,
  UnorderedListOutlined,
  HomeOutlined,
} from '@ant-design/icons';

import style from './index.scss';

const ProjectCard: React.FC = () => {
  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      hoverable
      size="small"
      title="项目名"
    >
      <p>项目描述啊飒飒东风啊师傅大家阿斯利康大家发拉就是</p>
      <div className={style.spaceBetween}>
        <div>
          <Avatar size="small" icon={<UserOutlined />} />
          <span>yhwang</span>
        </div>
        <div className={style.icons}>
          <span>
            <UserOutlined />1
          </span>
          <span>
            <HomeOutlined />2
          </span>
          <span>
            <UnorderedListOutlined />3
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
