import React from 'react'
import CardComponent from '@/components/Home/CardComponent'
import AreaChartComponent from '@/components/Home/AreaChartComponent'
import SparkChartComponent from '@/components/Home/SparkChartComponent'

const MainHome = () => {
  return (
    <div className='container mx-auto'>
      <div className='bg-slate-50 w-full h-screen'>
        <div className='my-3'>
          <CardComponent />
        </div>
        <div className='my-6 grid md:grid-cols-2 justify-between grid-cols-1'>
          <AreaChartComponent />
          <SparkChartComponent />
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default MainHome