import React from 'react'
import ContentHeader from '../../components/ContentHeader'
import { SaleData } from '../../data'
import BarChart from './Chat/Chat'
import WrapperDiv from './WrapperDiv'
const SalesDetails = () => {
  return (
    <div>
        <ContentHeader title="Today’s Sales" des="Sales Summary"/>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
            {SaleData && SaleData.map((data)=>{return(
                <div key={data.id} className='bg-primary1 p-4 rounded-md'>
                    <img src={data.icon} alt="" />
                    <div className='mt-2'>
                        <p className='text-[15px] font-semibold text-white/80 pb-1'>{data.count}</p>
                        <h1 className='text-white/80 text-[10px] font-medium'>{data.title}</h1>
                        <p className="text-[8px] md:text-[10px] font-medium" style={{color:data.color}}>{data.des}</p>
                        
                    </div>
                </div>
            )})}
        </div>
    </div>
  )
}

//seles chat

const SaleChart =()=>{
    return(
        <div>
            <ContentHeader title="Level"/>
            <div className='w-full h-[120px]'>
                <BarChart/>
            </div>
            <div className='flex justify-center w-full gap-20 lg:gap-30 items-center pt-4 mt-4'>
                <button>volume</button>
                <button>service</button>
            </div>
        </div>
    )
}

const TodaySales=()=>{
    return (
        <div className=''>
            <WrapperDiv>
            <div className='flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md'>
                <SalesDetails/>
            </div>
            <div className='flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md'>
                <SaleChart/>
            </div>
            </WrapperDiv>
        </div>
    )
}
export default TodaySales