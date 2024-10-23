import React from 'react'
import { Component } from './Chart';
import { ArrowUp,ArrowDown } from 'lucide-react';
import btc from '../../../../public/assets/btc.png'
import eth from '../../../../public/assets/eth.png'
import usdc from '../../../../public/assets/usdc.png'
import usdt from '../../../../public/assets/usdt.png'
import xrp from '../../../../public/assets/xrp.png'
import cardano from '../../../../public/assets/cardano.png'
import tera from '../../../../public/assets/tera.png'
import solana from '../../../../public/assets/solana.png'
import avalanche from '../../../../public/assets/avalanche.png'
import bnb from '../../../../public/assets/bnb.png'
import Image from 'next/image';
type CoinNameProps = {
  name: string;
  cmc_rank: number;
  price: string;
  percent_change_1h: number;
};


const CoinName = ({name,cmc_rank,price,percent_change_1h}:CoinNameProps) => {
  const up = percent_change_1h >= 0;
  const coinIcon = (row: string) => {
    switch (row) {
      case 'Bitcoin':
        return (
          <Image
            src={btc}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        );
      case 'Ethereum':
        return (
          <Image
            src={eth}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        );
      case 'Tether':
        return (
          <Image
            src={usdt}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        );
      case 'BNB':
        return (
          <Image
            src={bnb}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'USD Coin':
        return (
          <Image
            src={usdc}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'XRP':
        return (
          <Image
            src={xrp}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Cardano':
        return (
          <Image
            src={cardano}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Terra':
        return (
          <Image
            src={tera}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Solana':
        return (
          <Image
            src={solana}
            className='rounded-full'
            width={20}
            height={20}
            alt=''
          />
        );
      case 'Avalanche':
        return (
          <Image
            src={avalanche}
            className='rounded-full'
            width={20}
            height={50}
            alt=''
          />
        );
      default:
        return (
          <Image
            src={btc}
            className='rounded-full'
            width={50}
            height={50}
            alt=''
          />
        );
    }
  };
  const icon= coinIcon(name)
  return (
    <>
    <div className='flex flex-col space-y-2'>
        <ul className='flex justify-between items-center'>
          <li className='flex space-x-4'>
            <div className='flex space-x-2 items-center'>
          {icon}
            <h2 className='text-3xl'>  {name} </h2>
            <span> #{cmc_rank}</span>
            </div>
            
          </li>
          {/* <li className='flex space-x-4'>
          <span className=''> ${price} </span>
          <div className='flex items-center space-x-2'>
          <span className={up ? "text-green-600" : "text-red-600"}> {up?<ArrowUp/>:<ArrowDown/>}</span>
          
          <span className={up ? "text-green-600" : "text-red-600"}> {Math.abs(percent_change_1h).toFixed(2)}</span>
          
          </div>          
          </li> */}
          
        </ul>
        <ul>
        <li className='flex space-x-4'>
        <span className='text-2xl'> ${price} </span>
          <div className='flex items-center space-x-2'>
          <span className={up ? "text-green-600" : "text-red-600"}> {up?<ArrowUp/>:<ArrowDown/>}</span>
          
          <span className={up ? "text-green-600" : "text-red-600"}> {Math.abs(percent_change_1h).toFixed(2)}</span>
          
          </div>
           
          </li>
        </ul>
    </div>



    </>
  )
}

export default CoinName