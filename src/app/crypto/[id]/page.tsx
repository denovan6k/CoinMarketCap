import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
import TrendingSkeleton from '@/app/skeleton/trending-skeleton';
import TableSkeleton from '@/app/skeleton/table-skeleton';
// Dynamically import the Decrypto component
const Decrypto = dynamic(() => import('./Details'), {
  suspense: true, // Enable suspense for better loading states
});

const DetailPage = () => {
  return (
    <Suspense fallback={<div className='flex flex-col gap-4'>
        <TrendingSkeleton/>
        <TableSkeleton/>
    </div>}> {/* Fallback content while loading */}
      <Decrypto />
    </Suspense>
  );
};

export default DetailPage;
