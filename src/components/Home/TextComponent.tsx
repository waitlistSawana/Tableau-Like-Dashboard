import React from 'react'
import { Card } from '@tremor/react'
import Link from 'next/link'

const TextComponent = () => {
  return (
    <div>
      <Card className=''>
        <div>数据库数据来自经典示例数据NorthWind的销售数据。点击右上方【表格】可以查看数据库原表结构。</div>
        <div>本项目基于Nextjs框架，DaisyUI和tailwindcss组件库，PostgreSQL后端数据库，通过Vercel部署。</div>
        <div className='opacity-70'>如有兴趣，可以访问另一个相同技术栈项目，游戏《幻兽帕鲁》的工具站：<a className='underline hover:text-purple-800' href={'https://palworld-info.fun'} target='_blank'>帕鲁配种计算器</a></div>
      </Card>
    </div>
  )
}

export default TextComponent