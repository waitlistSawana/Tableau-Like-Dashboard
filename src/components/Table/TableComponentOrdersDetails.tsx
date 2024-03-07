// 'use client';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { Card } from '@tremor/react';

interface OrdersDetailsData{
  订单id : number;
  产品id : number;
  单价 : number;
  数量 : number;
  折扣 : number;
}

export default function TableComponentOrdersDetails({datas}:{datas:OrdersDetailsData[]}) {
  // const DataRowName = Object.keys(datas[0]); //可以用来查看键名

  return (
    <>
      <Card className='container mx-auto'>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            订单明细
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            原始表格示例，包含所有的订单明细
          </p>
        </div>
        <button
          type="button"
          className="mt-4 w-full whitespace-nowrap rounded-tremor-small bg-tremor-brand px-4 py-2.5 text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis sm:mt-0 sm:w-fit"
        >
          Add workspace
        </button>
      </div>
      
      <Table className="mt-8">
        <TableHead>
          <TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              订单id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              产品id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              单价
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              数量
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              折扣
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((item) => (
            <TableRow key={item.订单id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.订单id}
              </TableCell>
              <TableCell>{item.产品id}</TableCell>
              <TableCell>{item.单价}</TableCell>
              <TableCell>{item.数量}</TableCell>
              <TableCell>{item.折扣}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Card>
    </>
  );
}