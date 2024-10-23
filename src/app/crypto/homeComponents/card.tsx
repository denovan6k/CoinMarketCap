'use client'
import React from 'react'
import { ArrowDown,ArrowUp } from 'lucide-react'
import { useCoinStore } from '../../store' 
const Card = () => {
     const {coins}=useCoinStore()
     const{data}=coins
     const {
        quote: {
          USD: {
           market_cap,
           market_cap_dominance,
           volume_24h,
           volume_change_24h,
          }
        }
      } = data[0];
  return (
    <>
    <div className='flex space-x-4 p-[16px] text-[#000]'>
        <div className='p-[16px] border-2 rounded-xl'>
            <ul className='flex flex-col space-y-2'>
                <li className='text-[12px]'>Market Cap</li>
                <li className='text-[14px]'>${market_cap.toFixed(2)}</li>
                 <li className='text-[14px] text-red-500 items-center flex space-x-2'><ArrowDown /> <p>2.02%</p></li>
            </ul>
        </div>
        <div className='p-[16px] border-2 rounded-xl'>
            <ul className='flex flex-col space-y-2'>
                <li className='text-[12px]'>24h Vol</li>
                <li className='text-[14px]'>$83.86B</li>
                <li className='text-[14px] text-green-500 items-center flex space-x-2'><ArrowUp/> <p>11.41%</p></li>
            </ul>
        </div>
        {/* <div className='p-[16px] border-2 rounded-xl'>
            <ul className='flex flex-col space-y-2'>
                <li className='text-[12px]'>Dominance</li>
                <li className='text-[14px]'>Coin that has the most market cap</li>
                 <li className='text-[14px]'> coin image</li>
            </ul>
        </div> */}
        <div className=''>
          
        </div>
    </div>
    </>
  )
}

export default Card