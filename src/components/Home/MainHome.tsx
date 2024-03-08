import React from 'react'
import CardComponent from '@/components/Home/CardComponent'
import AreaChartComponent from '@/components/Home/AreaChartComponent'
import SparkChartComponent from '@/components/Home/SparkChartComponent'
import BarListsComponent from '@/components/Home/BarListsComponent'
import { db } from '@vercel/postgres'

interface dataCType{
  keyname: string;
  values: number;
}

const MainHome = async () => {

  //获取卡片需要的数据
  const client = await db.connect();
  const dataCard = await client.sql`
    with table_base as ( -- 基础表
      select o.订单id, o.客户id, od.产品id, od.单价, od.数量, od.折扣
      from nw_orders o
        left join nw_orders_details od
        on o.订单id=od.订单id
      order by 订单id
    ),
    table_sales as ( -- 销售量
      select sum(单价*数量*(1-折扣)) as sales
      from table_base
    ),
    table_orders_cnt as ( -- 订单数量
      select count(distinct 订单id) as orders_cnt
      from table_base
    ),
    table_customers_cnt as ( -- 客户数量
      select count(distinct 客户id) as customers_cnt
      from table_base
    ),
    table_avg_price as ( -- 平均订单单价
      select avg(sales) as avg_price
      from (select 订单id as orderid, sum(单价*数量*(1-折扣)) as sales
        from table_base
        group by orderid ) taps
    )
    -- 转置和合并
    select 
      case 
        when sales is not null then '销售量'
      end as keyname,
      round(sales,2) as values
    from table_sales
    union all
    select 
      case 
        when orders_cnt is not null then '订单数量'
      end as keyname,
      orders_cnt as values
    from table_orders_cnt 
    union all
    select 
      case 
        when customers_cnt is not null then '客户数量'
      end as keyname,
      customers_cnt as values
    from table_customers_cnt 
    union all
    select 
      case 
        when avg_price is not null then '平均单价'
      end as keyname,
      round(avg_price,2) as values
    from table_avg_price 
  `;
  const dataC = dataCard.rows as dataCType[]

  return (
    <div className='container mx-auto'>
      <div className='bg-slate-50 w-full h-screen'>
        <div className='my-3'>
          <CardComponent datas={dataC}/>
        </div>
        <div className='my-6 grid md:grid-cols-3 justify-between grid-cols-1 gap-6'>
          <AreaChartComponent />
          <SparkChartComponent />
          <BarListsComponent />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MainHome