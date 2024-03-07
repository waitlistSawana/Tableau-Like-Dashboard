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

export default function TableComponentOrdersDetail({datas}:{datas:OrdersData[]}) {
  // const DataRowName = Object.keys(datas[0]); //可以用来查看键名

  return (
    <>
      <Card className='container mx-auto'>
      <div className="sm:flex sm:items-center sm:justify-between sm:space-x-10">
        <div>
          <h3 className="font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            订单
          </h3>
          <p className="mt-1 text-tremor-default leading-6 text-tremor-content dark:text-dark-tremor-content">
            原始表格示例，包含所有的订单，以及一些地区维度信息
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
              客户id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              雇员id
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              订购日期
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              发货日期
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              到货日期
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              运货商
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              运货费
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主名称
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主地址
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主城市
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主地区
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主邮政编码
            </TableHeaderCell>
            <TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
              货主国家
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas.map((item) => (
            <TableRow key={item.订单id}>
              <TableCell className="font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.订单id}
              </TableCell>
              <TableCell>{item.客户id}</TableCell>
              <TableCell>{item.雇员id}</TableCell>
              <TableCell>{item.订购日期 && item.订购日期.toString()}</TableCell>
              <TableCell>{item.发货日期 && item.发货日期.toString()}</TableCell>
              <TableCell>{item.到货日期 && item.到货日期.toString()}</TableCell>
              <TableCell>{item.运货商}</TableCell>
              <TableCell>{item.运货费}</TableCell>
              <TableCell>{item.货主名称}</TableCell>
              <TableCell>{item.货主地址}</TableCell>
              <TableCell>{item.货主城市}</TableCell>
              <TableCell>{item.货主地区}</TableCell>
              <TableCell>{item.货主邮政编码}</TableCell>
              <TableCell>{item.货主国家}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </Card>
    </>
  );
}