import React from 'react';
import * as Icon from '@ant-design/icons';
import { Avatar } from 'antd';

enum Size {
  small,
  large,
  default,
}
interface IProps {
  size?: undefined | number | Size;
  icon?: string;
  src?: string;
  name: string;
}
const Person: React.FC<IProps> = ({ size, icon, src, name }) => {
  return (
    <div style={{ marginTop: '5px' }}>
      <Avatar
        size={size}
        icon={React.createElement(Icon[icon || 'UserOutlined'])}
        src={src}
        style={{ marginRight: '5px' }}
      />
      <span>{name}</span>
    </div>
  );
};

export default Person;
