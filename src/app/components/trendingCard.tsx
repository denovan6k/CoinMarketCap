import Image, { StaticImageData } from 'next/image'
import TrendingCardRow from './trendingCardRow'

const styles = {
  trendingCard: `w-full  p-5 py-3 pb-0 bg-[#323546] rounded-xl text-white mr-3`,
  trendingCardWrapper: `flex  items-center justify-between`,
}

type TrendingData = {
  icon: StaticImageData
  name: string
  symbol: string
  number: number
  
}

type TrendingProps = {
  icon: StaticImageData
  title: string
  trendingData: TrendingData[]
}

const TrendingCard = ({ icon, title, trendingData }: TrendingProps) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className='flex'>
          {icon && <Image src={icon} width={27} height={27} alt='' />}
          &nbsp;&nbsp;
          <p className='font-bold'>{title}</p>
        </div>
        {/* <MoreButton /> */}
      </div>
      <br />

      {trendingData.map((item, index) => {
        return (
          <TrendingCardRow
            key={index}
            number={item.number}
            symbol={item.symbol}
            name={item.name}
            icon={item.icon}
            
          />
        )
      })}
    </div>
  )
}

export default TrendingCard
