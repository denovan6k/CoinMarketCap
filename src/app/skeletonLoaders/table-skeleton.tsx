import { Skeleton } from "@/components/ui/skeleton"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function TableSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center py-4">
        <Skeleton className="h-10 w-[300px]" /> {/* Input skeleton */}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {[1, 2, 3, 4].map((i) => (
                <TableHead key={i}>
                  <Skeleton className="h-6 w-[100px]" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5].map((row) => (
              <TableRow key={row} className="hover:bg-muted">
                {[1, 2, 3, 4].map((cell) => (
                  <TableCell key={cell}>
                    <Skeleton className="h-6 w-[100px]" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 p-4">
          <Skeleton className="h-8 w-[80px]" /> {/* Previous button skeleton */}
          <Skeleton className="h-8 w-[80px]" /> {/* Next button skeleton */}
        </div>
      </div>
    </div>
  )
}