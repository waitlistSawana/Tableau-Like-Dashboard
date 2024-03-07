'use client'

import React from 'react'

interface OrdersDetailsData{
  订单id : number;
  产品id : number;
  单价 : number;
  数量 : number;
  折扣 : number;
}

const TestComponent = ({datas}:{datas:OrdersDetailsData[]}) => { //[]表示数组类型，很重要
  const rowsname = Object.keys(datas[0]);

  function clickdata(){
    console.log(rowsname)
    console.log(datas)
  }

  return (
    <div>
      <button onClick={clickdata}>button</button>
    </div>
  )
}

export default TestComponent