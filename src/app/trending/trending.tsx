'use client'
import { useState } from "react"
import { ArrowDown, ArrowUp } from 'lucide-react'
import fire from "../../../public/assets/fire.png"
import btc from "../../../public/assets/btc.png"
import usdt from "../../../public/assets/usdt.png"
import gainers from "../../../public/assets/gainers.png"
import recent from "../../../public/assets/recent.png"
import TrendingCard from "./trendingCard"
import TrendingSkeleton from "../skeletonLoaders/trending-skeleton"
import { useCoinStore } from "../store"

const styles = {
    trendingWrapper: `mx-auto max-w-screen-2xl`,
    h1: `text-3xl`,
    flexCenter: `flex flex-col gap-4 lg:flex-row items-center`
}

const Trending = () => {
    const [checked, setChecked] = useState(false)
    const { coins } = useCoinStore()
    const { data } = coins
    
    // Ensure the data exists before destructuring
    if (!data || data.length === 0) return null

    const {
        
        quote: {
            USD: {
                market_cap,
                market_cap_dominance,
                volume_24h,
                volume_change_24h,
            }
        }
    } = data[0]

    const trendingData = [
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
        },
        {
            number: 2,
            symbol: "USDT",
            name: "Tether",
            icon: usdt,
        },
        {
            number: 1,
            symbol: "BTC",
            name: "Bitcoin",
            icon: btc,
        },
    ]
if (!coins || !data){
       return(
        <TrendingSkeleton/>
       )
}
    return (
        <div className="p-[16px]">
            <div className={styles.trendingWrapper}>
                <div className="flex justify-between">
                    <h1 className={styles.h1}>Today&apos;s Cryptocurrency Prices by Market Cap</h1>
                </div>
                <br />
                <div className="flex flex-col lg:flex-row   gap-1 -mr-2">
                    <p className="">The global crypto market cap is ${market_cap.toFixed(2)}
                          &nbsp; </p> 
                         <div className="lg:flex flex-col gap-[2px] ">
                     <span className='text-[14px] text-red-500 items-center flex space-x-2'>
                         <ArrowDown /> <p>2.02%</p> 
                     </span>
                 <p>&nbsp; a decrease over the last day <span className="underline">Read More</span></p>
                 </div>
                </div>
                <br />
                <div className={styles.flexCenter}>
                    <TrendingCard title='Trending' icon={fire} trendingData={trendingData} />
                    <TrendingCard title='Biggest Gainers' icon={gainers} trendingData={trendingData} />
                    <TrendingCard title='Recently Added' icon={recent} trendingData={trendingData} />
                </div>
            </div>
        </div>
    )
}

export default Trending
