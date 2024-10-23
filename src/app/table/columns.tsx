import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react"
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from 'next/image'
import btc from '../../../public/assets/btc.png'
import eth from '../../../public/assets/eth.png'
import usdc from '../../../public/assets/usdc.png'
import usdt from '../../../public/assets/usdt.png'
import xrp from '../../../public/assets/xrp.png'
import cardano from '../../../public/assets/cardano.png'
import tera from '../../../public/assets/tera.png'
import solana from '../../../public/assets/solana.png'
import avalanche from '../../../public/assets/avalanche.png'
import bnb from '../../../public/assets/bnb.png'
// Payment type updated to reflect nested data structure
import { Button } from "@/components/ui/button";
export type Payment = {
  id: number;
  name: string;
  symbol: string;
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
  cmc_rank: number;
  circulating_supply: number;
  max_supply: number | null;
};

// Function to return the icon based on the coin name
const coinIcon = (row: Payment) => {
  switch (row.name) {
    case 'Bitcoin':
      return (
        <Image
          src={btc}
          className='rounded-full'
          width={20}
          height={20}
          alt=''
        />
      );
    case 'Ethereum':
      return (
        <Image
          src={eth}
          className='rounded-full'
          width={20}
          height={20}
          alt=''
        />
      );
    case 'Tether':
      return (
        <Image
          src={usdt}
          className='rounded-full'
          width={20}
          height={20}
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
          height={20}
          alt=''
        />
      );
    default:
      return (
        <Image
          src={btc}
          className='rounded-full'
          width={20}
          height={20}
          alt=''
        />
      );
  }
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "cmc_rank",
    header: "#",
  },
  {
    
    header: "Name",
    accessorKey: "name",
    cell: ({ cell, row }) => {
      const icon = coinIcon(row.original);
      return <div className="flex items-center space-x-2">
        {icon}
        <div className="flex space-x-2">
        <p className="font-bold">
          {row.original.name}</p> 
          <p className='text-slate-500'>{row.original.symbol}</p>
          </div></div>
  },
  },

  { 
    accessorKey:'price',
    accessorFn: (row) => row.quote.USD.price,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      // const price = row.getValue("quote.USD.price"); // Fetch the price value
      const isPositive = row.original.quote.USD.price >= 0; // Determine if the price is positive
  
      return (
        <span className={isPositive ? "text-green-600" : "text-red-600"}>
          ${row.original.quote.USD.price.toFixed(2)} {/* Formatting to 2 decimal places */}
        </span>
      );
  },},
  {
    accessorKey:'percent_change_1h',
    accessorFn: (row) => row.quote.USD.percent_change_1h,
    header: "1h %",
    cell: ({ row }) => {
      const percentChange = row.original.quote.USD.percent_change_1h; // Fetch the percent change value
      const isPositive = percentChange >= 0; // Determine if the change is positive

      return (
        <div className="flex gap-1 items-center">
           <span className= {isPositive ? "text-green-600" : "text-red-600"}>
             {isPositive ? <ArrowUp /> : <ArrowDown />}

           </span>

           <span className={isPositive ? "text-green-600" : "text-red-600"}>
                
                {Math.abs(percentChange).toFixed(2)} {/* Formatting to 2 decimal places */}
              </span>
        </div>
       
      );
    },
  },
  { accessorKey:'percent_change_24h',
    accessorFn: (row) => row.quote.USD.percent_change_24h,
    header: "24h %",
    cell: ({ row }) => {
      const percentChange = row.original.quote.USD.percent_change_24h; // Fetch the percent change value
      const isPositive = percentChange >= 0; // Determine if the change is positive

      return (
        <div className="flex gap-1 items-center">
           <span className= {isPositive ? "text-green-600" : "text-red-600"}>
             {isPositive ? <ArrowUp /> : <ArrowDown />}

           </span>

           <span className={isPositive ? "text-green-600" : "text-red-600"}>
                
                {Math.abs(percentChange).toFixed(2)} {/* Formatting to 2 decimal places */}
              </span>
        </div>
       
      );
    },
  },
  {accessorKey:'percent_change_7d',
    accessorFn: (row) => row.quote.USD.percent_change_7d,
    header: "7d %",
    cell: ({ row }) => {
      const percentChange = row.original.quote.USD.percent_change_7d; // Fetch the percent change value
      const isPositive = percentChange >= 0; // Determine if the change is positive

      return (
        <div className="flex gap-1 items-center">
           <span className= {isPositive ? "text-green-600" : "text-red-600"}>
             {isPositive ? <ArrowUp /> : <ArrowDown />}

           </span>

           <span className={isPositive ? "text-green-600" : "text-red-600"}>
                
                {Math.abs(percentChange).toFixed(2)} {/* Formatting to 2 decimal places */}
              </span>
        </div>
       
      );
    },
  },
  { accessorKey:'market_cap',
    accessorFn: (row) => row.quote.USD.market_cap,
    header: "Market Cap",
    cell: ({ getValue }) => `$${(getValue() as number).toFixed(2)}`,
  },
  {  accessorKey:'volume_24h',
    accessorFn: (row) => row.quote.USD.volume_24h,
    header: "Volume (24h)",
    cell: ({ getValue }) => `$${(getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: "circulating_supply",
    header: "Circulating Supply",
  },
];
