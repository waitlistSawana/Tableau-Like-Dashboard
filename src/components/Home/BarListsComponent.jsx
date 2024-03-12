'use client'

import { Card, BarList } from '@tremor/react';
import React from 'react'

// interface dataBLType{
//   name:string;
//   values:number;
// }

const datahero = [
  { name: '/home', value: 456 },
  { name: '/imprint', value: 351 },
  { name: '/cancellation', value: 51 },
];

const BarListsComponent = (datas) => {
  const data = datas.datas.map(item => {
    return {
      name: item.name,
      value: item.value
    };
  });
  return (
    <>
      <Card>
        <BarList data={data} className="mx-auto max-w-sm" />
      </Card>
    </>
  )
}

export default BarListsComponent