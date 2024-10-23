
import React, { Suspense }  from 'react'
import TableSkeleton from './skeleton/table-skeleton'
import Trending from './skeleton/trending-skeleton'
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