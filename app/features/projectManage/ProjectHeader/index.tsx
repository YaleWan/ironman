import React from 'react';
import style from './index.scss';


export default function ProjectHeader(): JSX.Element {
  const projectCount = 4
  return (
    <div className={style.projectHeader}>
       <div className={style.title}>项目管理({projectCount})</div>
    </div>
  );
}
