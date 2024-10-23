"use client"

import { GitCommitVertical, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import { useCoinStore } from "@/app/store"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

type CoinNameProps = {
 
  name: string
  index: number
};




export const description = "A line chart with custom dots"



export function Component({name,index}:CoinNameProps) {
  const {coins}=useCoinStore()
  const data=coins.data
  
  const {
    quote: {
      USD: {
        percent_change_1h,
        percent_change_24h,
        percent_change_7d,
        percent_change_30d,
        percent_change_60d,
        percent_change_90d
      }
    }
  } = data[index];
  
const chartData = [
  { volume: "90d", price: percent_change_90d,  },
  { volume: "60d", price: percent_change_60d, },
  { volume: "30d", price: percent_change_30d,  },
  { volume: "7d", price: percent_change_7d,  },
  { volume: "24h", price: percent_change_24h,  },
  { volume: "1h", price: percent_change_1h, },
]
const chartConfig = {
  price: {
    label: "Price",
    color: "hsl(var(--chart-1))",
  },
 
} satisfies ChartConfig

  
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{name} to Usd Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            
            height={window.innerWidth >= 1024 ? 500 : window.innerWidth >= 768 ? 400 : 300} // Responsive chart height
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="volume"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="price"
              type="natural"
              stroke="green"
              strokeWidth={2}
              dot={({ cx, cy, payload }) => {
                const r = 24
                return (
                  <GitCommitVertical
                    key={payload.month}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="hsl(var(--background))"
                    stroke="green"
                  />
                )
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  )
}
