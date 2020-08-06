// useECharts.js

import React, { useEffect } from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/title';

function useECharts(chartRef, config) {
  let chartInstance = null;

  function renderChart() {
    const renderedInstance = echarts.getInstanceByDom(chartRef.current);
    if (renderedInstance) {
      chartInstance = renderedInstance;
    } else {
      chartInstance = echarts.init(chartRef.current);
    }
    chartInstance.setOption(config);
  }

  useEffect(() => {
    renderChart();
  }, [config]);

  useEffect(() => {
    return () => {
      chartInstance && chartInstance.dispose();
    };
  }, []);
}

export default useECharts;
