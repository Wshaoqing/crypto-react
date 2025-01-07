以下是一个适用于该项目的 **README.md** 文件模板，包含项目构建的步骤、功能说明以及如何运行该项目的指南：

---

# Cryptocurrency Live Quotation App

This is a web-based cryptocurrency live quotation app built using **React**, **TypeScript**, and **Shopify Polaris UI**. It fetches live market data from **CoinGecko API** and allows users to search for specific cryptocurrencies by name or symbol. The app displays real-time cryptocurrency prices and other market data, such as market cap and price changes.

## Features

- **Live Data**: Fetches real-time cryptocurrency data from CoinGecko API.
- **Search**: Search for cryptocurrencies by name or symbol.
- **Sorting**: Sort the cryptocurrency list by price.
- **Pagination**: View paginated cryptocurrency data to handle large datasets.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User-Friendly UI**: Utilizes **Shopify Polaris UI** for consistent and polished design.

## Tech Stack

- **Frontend**: React, TypeScript, Shopify Polaris UI
- **API**: CoinGecko API (RESTful)
- **State Management**: React Hooks
- **Styling**: Shopify Polaris

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

## Installation

Follow the steps below to get your environment set up and run the project.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/crypto-quotation-app.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies.

```bash
cd crypto-quotation-app
npm install
```

### 3. Start the development server

Run the following command to start the app in development mode:

```bash
npm start
```

This will open the application in your default web browser at `http://localhost:3000`.

## How It Works

### **Fetching Cryptocurrency Data**

The app uses the **CoinGecko API** to fetch live data of cryptocurrencies. We fetch the following details:

- Name
- Symbol
- Current price in USD
- Market capitalization

The data is displayed in a table format, with sorting and pagination capabilities.

### **Search Functionality**

The search input allows users to search for cryptocurrencies by name or symbol. The search works in real-time, and the data will be filtered accordingly.

### **Pagination**

The data is paginated with the ability to move between pages. You can adjust the number of results per page.

## File Structure

```plaintext
src/
├── components/
│   ├── CryptoTable.tsx        // Data table for displaying cryptocurrencies
│   ├── Pagination.tsx         // Pagination controls
├── services/
│   ├── cryptoApi.ts           // API request functions for fetching data from CoinGecko
│   ├── utils.ts               // Utility functions like currency formatting
├── App.tsx                    // Main component that integrates everything
├── index.tsx                  // Application entry point
```

## API Integration

We are using **CoinGecko API** to fetch cryptocurrency market data. The API endpoint used is:

```plaintext
GET https://api.coingecko.com/api/v3/coins/markets
```

This endpoint returns a list of cryptocurrencies, including their current price, market cap, and other relevant data. The parameters used are:

- **vs_currency**: The currency in which we want the prices (USD).
- **order**: The sorting order of the cryptocurrencies (market_cap_desc for descending order by market cap).
- **per_page**: The number of results to fetch per page.
- **page**: The page number for pagination.
- **sparkline**: Set to `false` to disable sparkline data.

The search functionality is applied on the client side after the data is fetched.

## Development

### 1. Start the Development Server

To start the development server, run:

```bash
npm start
```

This will automatically open the app in your browser.

### 2. Run Tests

You can run the tests using the following command:

```bash
npm test
```

### 3. Build for Production

To build the app for production, use the following command:

```bash
npm run build
```

This will create an optimized build of the app in the `build/` directory.

## Contributing

We welcome contributions to improve this project! To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

Please make sure to follow the coding style and ensure all tests pass.


```
