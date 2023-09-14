import { listTopInvokeInterfaceInfoUsingGET } from '@/services/api-platform-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';
import '@umijs/max';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';

const InterfaceAnalysis: React.FC = () => {
  const [data, setData] = useState<API.InterfaceInfoVO[]>([]);

  useEffect(() => {
    // 从远程获取数据
    try {
      listTopInvokeInterfaceInfoUsingGET().then((res) => {
        if (res.data) {
          setData(res.data);
        }
      });
    } catch (e: any) {
      console.log('load data error' + e.getMessage);
    }
  }, []);

  const chartData = data.map((item) => {
    return {
      value: item.totalNum,
      name: item.name,
    };
  });

  const option = {
    title: {
      text: '调用次数最多的接口',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: '调用情况',
        type: 'pie',
        radius: '50%',
        data: chartData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };
  return (
    <PageContainer>
      <ReactECharts option={option} />
    </PageContainer>
  );
};

export default InterfaceAnalysis;
