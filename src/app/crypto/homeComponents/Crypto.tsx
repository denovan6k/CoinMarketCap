import React,{Suspense} from 'react'

import TableSkeleton from '@/app/skeletonLoaders/table-skeleton'
import Table from '../../table/page'

import Trending from '../../trending/trending'


const Crypto = () => {
  return (
    <div className='min-h-screen'>
        
      <div className=''>
        
      <Trending/>
     
      </div>
      
        <Table/>
        
    </div>
  )
}

export default Crypto