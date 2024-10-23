"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpDown } from "lucide-react"


type converterProps = {
    price: number
    symbol:string
    name:string
} 



export default function BTCUSDConverter({price,symbol,name}:converterProps) {
  
  const [btcAmount, setBtcAmount] = useState<string>("1")
  const [usdAmount, setUsdAmount] = useState<string>("")
  useEffect(() => {
    if (price) {
      const usd = parseFloat(btcAmount) * price
      setUsdAmount(usd.toFixed(2))
    }
  }, [btcAmount, price])

  

  const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setBtcAmount(value)
    if (price) {
      const usd = parseFloat(value) * price
      setUsdAmount(isNaN(usd) ? "" : usd.toFixed(2))
    }
  }

  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsdAmount(value)
    if (price) {
      const btc = parseFloat(value) / price
      setBtcAmount(isNaN(btc) ? "" : btc.toFixed(8))
    }
  }

  return (
    <Card className="w-full flex flex-col p-[4px]">
      <CardHeader>
        <CardTitle>{symbol} to USD Converter</CardTitle>
        <CardDescription>Convert between {name} ({symbol}) and US Dollars (USD)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="btc-input">{name} ({symbol})</Label>
            <Input
              id="btc-input"
              type="number"
              placeholder="Enter BTC amount"
              value={btcAmount}
              onChange={handleBtcChange}
            />
          </div>
          <div className="flex justify-center">
            <ArrowUpDown className="text-gray-500" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="usd-input">US Dollar (USD)</Label>
            <Input
              id="usd-input"
              type="number"
              placeholder="Enter USD amount"
              value={usdAmount}
              onChange={handleUsdChange}
            />
          </div>
          {price && (
            <p className="text-sm text-gray-500 text-center">
              Current {symbol} Price: ${price.toLocaleString()}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}