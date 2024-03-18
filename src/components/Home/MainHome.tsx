import React from 'react'
import CardComponent from '@/components/Home/CardComponent'
import AreaChartComponent2 from '@/components/Home/AreaChartComponent2'
import BarListsComponent from '@/components/Home/BarListsComponent'
import { db } from '@vercel/postgres'
import DonutChartComponent  from '@/components/Home/DonutChartComponent'
import { Card } from '@tremor/react'
import TextComponent from "@/components/Home/TextComponent";


interface dataCType{
  keyname: string;
  values: number;
}
interface dataBLType{
  name:string;
  values:number;
}
interface dataMSType{
  month:string;
  sales:number;
}

const MainHome = async () => {
  const client = await db.connect();

  //获取卡片需要的数据
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
        when sales is not null then '总销售额'
      end as keyname,
      round(sales,2) as values
    from table_sales
    union all
    select 
      case 
        when orders_cnt is not null then '总订单数量'
      end as keyname,
      orders_cnt as values
    from table_orders_cnt 
    union all
    select 
      case 
        when customers_cnt is not null then '总客户数量'
      end as keyname,
      customers_cnt as values
    from table_customers_cnt 
    union all
    select 
      case 
        when avg_price is not null then '平均客单价'
      end as keyname,
      round(avg_price,2) as values
    from table_avg_price 
  `;
  const dataC = dataCard.rows as dataCType[]

  //获取用户名单
  const dataBarList = await client.sql`
  with table_base as (
    select o.订单id as order_id, o.客户id as customer_id, od.单价*od.数量*(1-od.折扣) as one_price
    from nw_orders o 
    left join nw_orders_details od on o.订单id = od.订单id
  )
  select customer_id as name, cast(sum(one_price) as decimal(10,2)) as value 
  from table_base 
  group by customer_id
  order by value desc
  limit 8
  `;
  const dataBL = dataBarList.rows as dataBLType[]

  //获取月交易信息
  const dataMonthSum =await client.sql`
  with table_base as (
    select 
      o.订单id as order_id, o.订购日期 as buy_dt, od.单价 as price, od.数量 as amount, od.折扣 as discount
    from nw_orders o
    left join nw_orders_details od on o.订单id = od.订单id
    ),
  table_order_sum as (
    select 
      order_id, buy_dt, sum( price*amount*(1-discount) ) as sum
    from table_base
    group by order_id, buy_dt
  ),
  table_month_tag as (
    select * ,DATE_TRUNC('month', buy_dt) as month
    from table_order_sum
  ),
  table_month_sum as (
    select month, cast(sum(sum) as decimal(20,2)) as sales
    from table_month_tag 
    group by month
    order by month
  )
  select * from table_month_sum
  `
  const dataMS = dataMonthSum.rows as dataMSType[]

  return (
    <div className='container mx-auto'>
      <div className='w-full h-screen'>
        <div className='mb-6 mt-3'>
          <TextComponent />
        </div>
        <div className='my-3'>
          <CardComponent datas={dataC}/>
        </div>
        <div className='my-6 grid justify-between gap-6 md:grid-cols-4 grid-cols-1'>
          <div className='col-span-3'>
            <AreaChartComponent2 datas={dataMS} />
            <div className='grid grid-cols-5 '>
              <div className='cols-span-1'>
                {/* <Card className='mt-6'>
                  <DonutChartComponent  />
                </Card> */}
              </div>
              <div className='cols-span-2'>
              </div>
            </div>
          </div>
          <div className='md:col-span-1 w-full'>
            <BarListsComponent datas={dataBL}/>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div className='w-full h-[108px]'></div>
    </div>
  )
}

export default MainHome