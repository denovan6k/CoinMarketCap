// /src/app/api/fetchdata/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_CMC_API_KEY; //get api key from .env.local


  //if apikey is falsy, then return error coinMarketCap Api key is missing with status 500
  if (!apiKey) {
    return NextResponse.json({ error: 'CoinMarketCap API key is missing.' }, { status: 500 });
  }
   //try catch block, to fetch data and catch any errors 
  try {
    //read the get api key from CoinMarketCap
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      method: 'GET',
      headers: {
        'X-CMC_PRO_API_KEY': apiKey,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data, status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data); //response with data, status 200
  } catch (error) {
    console.error('Error fetching CoinMarketCap data:', error);
    return NextResponse.json({ error: 'Error fetching CoinMarketCap data.' }, { status: 500 });
  }
}

