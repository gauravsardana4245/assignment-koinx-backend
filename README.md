# KoinX Assignment Backend

This backend project provides several functionalities related to cryptocurrency information using the Coingecko API.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Background Job](#background-job)
- [Deployment](#deployment)

## Features

### 1. Cryptocurrency Information Management
- **Create Cryptocurrencies:** `/create-cryptos` (POST)
  - Endpoint to fetch names and ids of all cryptocurrencies from the Coingecko API and store them in a MongoDB database.
- **Get All Cryptocurrencies:** `/get-all-cryptos` (GET)
  - Endpoint to retrieve the stored cryptocurrency information from the MongoDB database.

### 2. Background Job
- **Update Cryptocurrencies:** Cron Job
  - A cron job is scheduled to run every 1 hour, updating the list of cryptocurrencies in the MongoDB database.

### 3. Cryptocurrency Price Comparison
- **Get Relative Price on Date:** `/get-relative-price-on-date` (POST)
  - Endpoint to compare the prices of two cryptocurrencies on a specific date.
  - Request body format:
    ```json
    {
      "fromCurrency": "ethereum",
      "toCurrency": "bitcoin",
      "date": "12-01-2023"
    }
    ```
  - Example response:
    ```json
    {
      "value": 0.077223
    }
    ```

### 4. Companies Holding Cryptocurrency
- **Get Companies Holding Coin:** `/get-companies-holding-coin` (POST)
  - Endpoint to integrate Coingecko’s `/companies/public_treasury` API and retrieve the list of companies holding a particular cryptocurrency.
  - Request body format:
    ```json
    {
      "currency": "ethereum"
    }
    ```
  - Example response:
    ```json
    {
      "companies": [
        {
          // Company details holding the cryptocurrency
        },
        // ... (more companies)
      ]
    }
    ```

## Installation

1. Clone the repository: `git clone https://github.com/yourusername/your-repo.git`
2. Navigate to the project directory: `cd your-repo`
3. Install dependencies: `npm install`

## Usage

1. Set up your MongoDB database and provide the connection URI in the `.env` file.
2. Start the application: `npm start`
3. The server will run on `http://localhost:3000` by default.

## Endpoints

- Cryptocurrency Management:
  - **Create Cryptocurrencies:** `POST /create-cryptos`
  - **Get All Cryptocurrencies:** `GET /get-all-cryptos`

- Cryptocurrency Price Comparison:
  - **Get Relative Price on Date:** `POST /get-relative-price-on-date`

- Companies Holding Cryptocurrency:
  - **Get Companies Holding Coin:** `POST /get-companies-holding-coin`

## Background Job

The background job for updating the list of cryptocurrencies runs automatically every 1 hour.

## Deployment

The backend is deployed on Render and can be accessed at [https://assignment-koinx-backend.onrender.com](https://assignment-koinx-backend.onrender.com).
