import React from 'react'
import TodaySales from './TodaySales'
import TopProducts from './TopProduct'
import Earnings from './Earning'


const Dashboard = () => {
  return (
    <div>
      <TodaySales/>
      <TopProducts/>
      <Earnings/>
    </div>
  )
}

export default Dashboard