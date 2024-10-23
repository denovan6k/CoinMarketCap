
import React, { Suspense }  from 'react'
import TableSkeleton from './skeletonLoaders/table-skeleton'
import Trending from './skeletonLoaders/trending-skeleton'
import HomePage from './crypto/page'
const Home = () => {
  return (
    <div>
      <Suspense fallback={<div className='flex flex-col gap-4'>  
            <Trending/>
            <TableSkeleton/>

      </div>}>
      <HomePage/>
      </Suspense>
      

    </div>
  )
}

export default Home