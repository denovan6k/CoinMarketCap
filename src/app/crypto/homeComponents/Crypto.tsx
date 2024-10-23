import React,{Suspense} from 'react'

import TableSkeleton from '@/app/skeleton/table-skeleton'
import Table from '../../table/page'

import Trending from '../../components/trending'


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