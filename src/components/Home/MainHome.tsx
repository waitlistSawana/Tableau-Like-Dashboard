import React from 'react'
import CardComponent from '@/components/Home/CardComponent'
import AreaChartComponent from '@/components/Home/AreaChartComponent'
import SparkChartComponent from '@/components/Home/SparkChartComponent'
import BarListsComponent from '@/components/Home/BarListsComponent'

const MainHome = () => {
  return (
    <div className='container mx-auto'>
      <div className='bg-slate-50 w-full h-screen'>
        <div className='my-3'>
          <CardComponent />
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