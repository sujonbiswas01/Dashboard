import React from 'react'
import { FaEllipsisV, FaFilter, FaSearch } from 'react-icons/fa'
import OrderList from './Order-list'

const Order = () => {
  return (
    <main className='pt-5 px-2.5  min-h-screen'>
      <section className='flex items-center justify-between text-white bg-primary2 rounded-md py-1 md:py-2 px-2.5'>
        <h1 className='text-xl md:text-2xl font-bold text-grayText  sm:pr-0'>Order</h1>
        <button className='bg-[#341196]/10 border border-blue-700/40 rounded-md py-1.5 px-2.5 cursor-pointer hover:text-blue-500 hover:bg-[#341196]/20 transition-all duration-300'>Create Order</button>
      </section>
{/* filter section */}
      <section className='py-6 flex justify-between gap-2 '>
        <div className='flex gap-x-1 text-sm md:text-base'>
          <Button >All</Button>
          <Button>Open</Button>
          <Button>Closed</Button>
          <Button>Add</Button>
        </div>
        <div className='flex gap-x-2'>
          <Button><FaSearch className='size-4 cursor-pointer'/></Button>
          <Button><FaFilter className='size-4 cursor-pointer'/></Button>
          <Button><FaEllipsisV className='size-4 cursor-pointer'/></Button>
        </div>
      </section>
      {/* table */}

      <section className='w-full'>
        <OrderList/>
      </section>

    </main>
  )
}
export default Order 
const Button=({children})=><button className='px-2 py-1.5 rounded-md cursor-pointer bg-primary2'>{children}</button>