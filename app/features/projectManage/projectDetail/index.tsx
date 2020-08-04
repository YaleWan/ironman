import React, { useEffect } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const ProjectDetail: React.FC = (props) => {
  useEffect(() => {
    console.log('1111 :>> ', 1111);
    const term = new Terminal();

    // 将term挂砸到dom节点上
    term.open(document.getElementById('xterm'));

    term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  }, []);
  return <div id="xterm">123</div>;
};

export default ProjectDetail;
