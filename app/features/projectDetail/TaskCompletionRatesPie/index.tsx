import React, { useRef } from 'react';
import useECharts from '@app/hooks/useEcharts';
import style from './index.scss';

const TaskCompletionRatesPie = ({ options, width, height }) => {
  const chartRef = useRef(null);
  useECharts(chartRef, options);
  return (
    <div className={style.chartContanier}>
      <div ref={chartRef} style={{ width, height }} />
    </div>
  );
};
export default TaskCompletionRatesPie;
