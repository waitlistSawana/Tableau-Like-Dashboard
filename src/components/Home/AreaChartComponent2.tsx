'use client'

import { AreaChart, Card } from '@tremor/react';

const valueFormatter = function (number:number): string {
  return '￥ ' + new Intl.NumberFormat('us').format(number).toString();
};

interface dataMSType{
  month:string;
  sales:number;
}

export default function AreaChartComponent2({datas}:{datas:dataMSType[]}) {
  const dataMS = datas.map(data => {
    // 解析时间戳字符串
    const date = new Date(data.month);
    // 提取年份和月份
    const year = date.getFullYear();
    const monthName = date.toLocaleString('en-US', { month: 'short' }); // 获取月份的全名
    // 转换sales字段为number类型
    const sales =  Number(data.sales); // 如果sales是数字或数字字符串，则转换为数字；否则设置为0
    // 构造新的数据对象
    return {
      month: `${year} ${monthName}`, // 替换month属性为转换后的字符串
      sales: sales
    };
  });
  // 计算最近12个月sales的和
  const totalSales = datas.slice(-12,).reduce((sum, data) => sum + Number(data.sales), 0);

  return (
    <Card>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">最近12月销售收入</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">￥ {totalSales}</p>
      <AreaChart
        className="mt-4 h-72"
        data={dataMS}
        index="month"
        yAxisWidth={65}
        categories={['sales']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}