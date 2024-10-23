"use client"
// pages/index.tsx
import { useEffect, useState } from 'react';
import { useCoinStore } from '@/app/store'; // Import Zustand store
import { useParams } from 'next/navigation';
import CoinName from '../detailsPageComponents/listingName';
import { Component } from '../detailsPageComponents/Chart';
import Rough from '../detailsPageComponents/Rough';
import BTCUSDConverter from '../detailsPageComponents/converter';
import TrendingSkeleton from '@/app/skeletonLoaders/trending-skeleton';
import TableSkeleton from '@/app/skeletonLoaders/table-skeleton';


export default function Home() {
  const { coins, getCoins } = useCoinStore();
  const { id } = useParams();

  // Ensure the id is parsed as an integer
  const index = parseInt(id as string);

  // Check if `coins` and `data` exist
  if (!coins || !coins.data || isNaN(index)) { 
     getCoins();  // Fetch the data if it doesn't exist yet
    return <div>
        <TrendingSkeleton/>
        <TableSkeleton/>
    </div>;
  }

  const data = coins.data;

  // Make sure the index is within the bounds of `data`
  
//destructuring properties from data
  const {
    name,
    cmc_rank,
    symbol,
    quote: {
      USD: {
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        price,
      },
    },
  } = data[index];

  return (
    <div className='p-[16px] flex flex-col gap-4 min-h-screen'>
      <h1>
        <CoinName
          name={name}
          cmc_rank={cmc_rank}
          price={price.toFixed(2)} //convert to two decimal places
          percent_change_1h={percent_change_1h}
        />
      </h1>
      <div className='flex flex-col space-y-4'>
        <Rough />
        <div className='grid grid-rows-2 lg:grid-cols-2 gap-4 '>
          <Component name={name} index={index} />
          <BTCUSDConverter price={price} name={name} symbol={symbol}/>
        </div>
      </div>
    </div>
  );
}
