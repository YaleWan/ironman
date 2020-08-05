import React from 'react';
import ProjectDetailHeader from './ProjectDetailHeader';

interface IProps {}
const ProjectDetail: React.FC<IProps> = (props) => {
  console.log('props :>> ', props);
  return (
    <div>
      <ProjectDetailHeader />
    </div>
  );
};

export default ProjectDetail;
