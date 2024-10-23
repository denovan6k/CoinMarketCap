import {create} from 'zustand'
import { persist,createJSONStorage } from 'zustand/middleware'

export type Coin = {
  id: number;
  name: string;
  symbol: string;
  cmc_rank: number;
  quote: {
    USD: {
      price: number;
      percent_change_1h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      market_cap: number;
      volume_24h: number;
    };
  };
};
  
  type CoinStore = {
    coins: any;
    query: any;
    setCoins: (coins: any) => Promise<void>;
    getCoins: () => Promise<Coin[]>;
    setQuery: (query: any) => Promise<void>;
  };


export const useCoinStore = create<CoinStore>()(
    persist((set,) => ({
        coins: [],
        query: [],
        setCoins: async (coins) => {
          
          set({ coins })} , 
          getCoins: async () =>{
                try{
                  const res =await fetch('/api/fetchdata')
                  const data = await res.json()
                  return data.data.data


                }catch(error){console.log(error as Error);}
          },

        setQuery: async (query) => {

            set({ query })},
    }),
    
      {
        name: 'coin-storage', // unique name for localStorage
        storage: createJSONStorage(() => localStorage), // (optional) default is 'localStorage' // (optional) default is 'localStorage'
      }
    )
  );