# CoinMarketCap Clone

A **CoinMarketCap Clone** built with **Next.js**, **TypeScript**, **Zustand** for state management, and **shadCN** UI components. This project fetches real-time cryptocurrency data and displays trending coins, biggest gainers, and recently added cryptocurrencies. It uses the **CoinMarketCap API** for data fetching and **Lucide Icons** for visual elements.

## Features

- Fetch real-time cryptocurrency data from the CoinMarketCap API
- Display trending cryptocurrencies, top gainers, and newly added coins
- Skeleton loaders for a smooth loading experience
- UI styled with `shadCN` and responsive for all devices
- State management handled with `Zustand`

---

## Installation

Follow these steps to get the project running locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/coinmarketcap-clone.git
    cd coinmarketcap-clone
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and set up your environment variables. You need an API key from CoinMarketCap to fetch live data.

    Example `.env` file:

    ```bash
    NEXT_PUBLIC_CMC_API_KEY=your_api_key
    ```

4. Run the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) to see the app in your browser.

---

## Environment Variables

Make sure you set up the following environment variables:

| Key                       | Description                          |
| --------------------------| ------------------------------------ |
| `NEXT_PUBLIC_CMC_API_KEY`  | Your CoinMarketCap API Key           |

Get your API key by signing up on the [CoinMarketCap Developers Portal](https://coinmarketcap.com/api/).

---

## API Usage

This app uses the CoinMarketCap API to fetch data. You will need to subscribe to a plan to get your API key.

Example API call used in the app:

```typescript
const response = await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`, {
    headers: {
        'X-CMC_PRO_API_KEY': process.env.NEXT_PUBLIC_CMC_API_KEY
    }
});
```


