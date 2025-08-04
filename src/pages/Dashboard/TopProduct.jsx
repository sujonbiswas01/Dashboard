import React from 'react'
import { topProductsData } from '../../data'
import ContentHeader from '../../components/ContentHeader'
import ChartComponent from './Chat/LineChart'
import WrapperDiv from './WrapperDiv'
const ProductDetails = () => {
    const tableHead=["#","Name","Popularify","Sales"]
  return (
    <div className='p-4'>
        <ContentHeader title="Top Products"/>
        <div className='w-full'>
            <div>
                <div className='flex justify-between px-6 items-center'>
                    {tableHead.map((h,idx)=>(
                        <h1 key={idx} className='text-[13px] font-medium text-grayText'>
                            {h}
                        </h1>
                    ))}
                </div>
                {
                    topProductsData.map((t,idx)=>{
                        const color=()=>t.color
                        return(
                            <div key={t.id} className='text-white/80 flex items-center justify-between gap-3 text-center text-[10px] font-medium px-6 border-b border-grayText space-y-10'>
                                <span className='px-3'>{idx}</span>
                                <p className='w-[50%]'>{t.name}</p>
                                <div className='relative max-w-[25%] w-full h-[3px] rounded-full bg-grayText '>
                                    <div style={{background:t.color}} className={`absolute top-0 left-0 ${t.priority>=20  && "w-[25%]"} ${t.priority>=50 && "w-[50%]"} ${t.priority>=80 && "w-[70%]"} ${t.priority>=90 && "w-[100%]"} rounded-full h-[3px]`}>

                                    </div>
                                       </div>
                                    <button className={`py-1 px-2 rounded-sm text-[${color()}]`} style={{border:`${t.color} 1px solid`}}>{t.priority} %</button>
                             

                            </div>
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

const CustormerFulfilMent =()=>{
    return(
        <div className='w-full p-4'>
            <ContentHeader title="Customer Fulfilment"/>
            <div className='w-full'>
                <ChartComponent/>
                <div className='flex items-center justify-between pt-2 mt-2 border-t border-grayText/20'>
                    <div><button className='flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full'>Last Month</button></div>
                    <p className='text-center text-[10px] font-medium text-white/70'>$4,007</p>
                    
                </div>
                <div className='flex items-center justify-between pt-2 mt-2 border-t border-grayText/20'>
                    <div><button className='flex items-center text-[10px] font-medium lg:justify-center gap-2 text-grayText w-full'>next Month</button></div>
                    <p className='text-center text-[10px] font-medium text-white/70'>$4,007</p>
                    
                </div>
            </div>
        </div>
    )
}
const TopProducts=()=>{
    return(
        <div>
            <WrapperDiv>
            <div className='flex-[1.3] lg:flex-[1.5] bg-primary2 rounded-md'>
                <ProductDetails/>
            </div>
            <div className='flex-[0.7] lg:flex-[0.5] bg-primary2 rounded-md'>
                <CustormerFulfilMent/>
            </div>
            </WrapperDiv>
        </div>
    )
}
export default TopProducts