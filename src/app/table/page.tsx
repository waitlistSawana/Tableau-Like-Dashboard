import React from 'react'
import { db } from '@vercel/postgres';
import TestComponent from '@/components/TestComponent';
import TableComponentOrdersDetails from '@/components/Table/TableComponentOrdersDetails';
import TableComponentOrders from '@/components/Table/TableComponentOrders';
 
interface OrdersDetailsData{
  订单id : number;
  产品id : number;
  单价 : number;
  数量 : number;
  折扣 : number;
}
interface OrdersData{
  订单id : number; 
  客户id : string;
  雇员id : number;
  订购日期 : Date;
  到货日期 : Date;
  发货日期 : Date;
  运货商 : number;
  运货费 : number;
  货主名称 : string;
  货主地址 : string;
  货主城市 : string;
  货主地区 : string;
  货主邮政编码 : number;
  货主国家 : string;
}

const TablePage = async () => {
  const client = await db.connect();

  //订单明细表-原始数据
  const dataOrderDetails = await client.sql`
    SELECT *
    from nw_orders_details
    limit 5
  `;
  const datasOD = dataOrderDetails.rows as OrdersDetailsData[];
  
  //订单表-原始数据
  const dataOrder = await client.sql`
    SELECT *
    from nw_orders
    limit 5
  `;
  const datasO = dataOrder.rows as OrdersData[];

  return (
    <div>
      {/* <TestComponent datas={datasOD} /> */}
      <div className='flex flex-col gap-6'>
        <TableComponentOrdersDetails datas={datasOD}/>
        <TableComponentOrders datas={datasO}/>
      </div>
      <div className='h-6'></div>
    </div>
  )
}

export default TablePage