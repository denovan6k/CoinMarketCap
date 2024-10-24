"use client"
// pages/index.tsx
import { useEffect, useState } from 'react';
import { useCoinStore } from '../store';
import Crypto from './homeComponents/Crypto';
type CoinData = {
  id: number;
  name: string;
  symbol: string;
  price: number;
};

export default function HomePage() {
  const { coins, setCoins } = useCoinStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch('/api/fetchdata');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
   
    fetchCoins();
  }, [setCoins]);

  



  return (
    <div>
      <Crypto />
      
    </div>
  );
}
