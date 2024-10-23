'use client'
import { columns } from "./columns"
import { DataTable } from "./dataTable"
import { useCoinStore } from "../store"
import TableSkeleton from "../skeletonLoaders/table-skeleton"
import TrendingSkeleton from "../skeletonLoaders/trending-skeleton"


export default function Table() {
 const {coins}=useCoinStore()
          
   const tableData = coins.data
   if (!tableData){
    return (<div className="flex flex-col gap-4">
      <TrendingSkeleton/>
      <TableSkeleton/></div>)
   }
  return (
    <div className="p-[16px]">
      <DataTable columns={columns} data={tableData} />
    </div>
  )
}
