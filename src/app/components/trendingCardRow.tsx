
import Image, {StaticImageData} from 'next/image'
type TrendingData = {
  icon: StaticImageData
  name: string
  symbol: string
  number: number
  
}
const styles = {
  trendingCardRow: `flex items-center justify-between mb-4 text-[0.93rem]`,
}

const TrendingCardRow = ({ number, icon, name, symbol, }:TrendingData) => {
  return (
    <div className={styles.trendingCardRow}>
      <p className='opacity-40'>{number}</p>
      <div className='w-full flex'>
        <div className='mx-5'>
          {icon && <Image alt='' src={icon} width={20} height={20} />}
        </div>
        <p className='font-bold'>
          {name}
          <span className='text-gray-400'> {symbol}</span>
        </p>
      </div>
      
    </div>
  )
}

export default TrendingCardRow
