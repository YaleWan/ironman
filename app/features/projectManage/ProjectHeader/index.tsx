import React from 'react';
import { readDir } from '@app/utils/file';
import { Button } from 'antd';
import style from './index.scss';

export default function ProjectHeader(): JSX.Element {
  const projectCount = 4;
  const getPath = () => {
    const data = readDir('C:\\Users\\Administrator\\Desktop\\project');
    console.log('data :>> ', data);
  };
  return (
    <div className={style.projectHeader}>
      <div className={style.title}>
        项目管理
        <span>({projectCount})</span>
        <Button type="primary" onClick={getPath}>
          click
        </Button>
      </div>
    </div>
  );
}
