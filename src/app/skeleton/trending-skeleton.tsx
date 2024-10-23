
import { Skeleton } from "@/components/ui/skeleton"

import { useCoinStore } from "../store"


const TrendingSkeleton = () => {
    

    return (
        <div className="p-[16px]">
            <div className='mx-auto max-w-screen-2xl'>
                <div className="flex justify-between">
                    <Skeleton className="h-[28px] w-[173px]"/>
                </div>
                <br />
                <div className="flex flex-col lg:flex-row   gap-1 -mr-2 w-[173px]">
                    <Skeleton className="h-[14px] w-full"/>
                         <div className="flex">
                     <span className='h-[12px] items-center flex space-x-2'>
                     < Skeleton className='h[12px] max-w-md'/>
                     </span>
                 < Skeleton className='h[12px] max-w-md'/>
                 </div>
                </div>
                <br />
                <div className='flex flex-col gap-4 lg:flex-row w-[100px] lg:max-w-[446px] md:min-w-[3393px]'>
                    < Skeleton className='h[32px] w-full'/>
                    < Skeleton className='h[32px] w-full'/>
                    < Skeleton className='h[32px] w-full'/>
                </div>
            </div>
        </div>
    )
}

export default TrendingSkeleton
