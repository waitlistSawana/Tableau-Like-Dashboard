'use client'

import { AreaChart, Card } from '@tremor/react';

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2750,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
  },
];

const valueFormatter = function (number:number): string {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};

export default function AreaChartUsageExample() {
  return (
    <Card>
      <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Newsletter Revenue</h3>
      <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
      <AreaChart
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={['SemiAnalysis']}
        colors={['indigo', 'cyan']}
        valueFormatter={valueFormatter}
      />
    </Card>
  );
}