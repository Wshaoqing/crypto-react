# Cryptocurrency Live

This is a web-based cryptocurrency live quotation app built using **React**, **TypeScript**, and **Shopify Polaris UI**. It fetches live market data from **CoinGecko API** and allows users to search for specific cryptocurrencies by name or symbol. The app displays real-time cryptocurrency prices and other market data, such as market cap and price changes.

## Tech Stack

- **Frontend**: React, TypeScript, Shopify Polaris UI
- **API**: CoinGecko API (RESTful)
- **State Management**: React
- **Styling**: Shopify Polaris

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Version 14 or higher
- **npm**: Version 6 or higher

## Installation

Follow the steps below to get your environment set up and run the project.

### 1. Clone the repository

```bash
https://github.com/Wshaoqing/crypto-react.git
```

### 2. Install dependencies

Navigate to the project folder and install the necessary dependencies.

```bash
cd crypto-react
npm install
```

### 3. Start the development server

Run the following command to start the app in development mode:

```bash
npm run dev
```

This will open the application in your default web browser at `http://localhost:5173`.

## File Structure

```plaintext
src/
├── api/
│   ├── cryptoApi.ts           // API request functions for fetching data from CoinGecko
│   ├── utils.ts               // Utility functions like currency formatting
├── components/
│   ├── CryptoTable.tsx        // Data table for displaying cryptocurrencies
│   ├── Pagination.tsx         // Pagination controls
├── view/
│   ├── market.tsx             //Bussiness Static Page
├── main.tsx                  // Application entry point
```

## API Integration

We are using [CoinGecko API](https://docs.coingecko.com/reference) to fetch cryptocurrency market data. The API endpoint used is:

```plaintext
GET https://api.coingecko.com/api/v3/coins/markets
```

## Development LocalHost(option 1)

### 1. Start the Development Server

To start the development server, run:

```bash
npm run dev
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

This will create an optimized build of the app in the `dist/` directory.

## Development shell file for Linux(option 2)

### 1: Transfer Script to Server

Upload the `deploy.sh` file to your server using `scp` or another transfer tool:

```bash
scp deploy.sh serverAddress:/path/to/deploy.sh
```

### 2: Make the Script Executable

Log into your server and run:

```bash
chmod +x /path/to/deploy.sh
```

### 3: Execute the Script

Run the script to deploy your React project:

```bash
/path/to/deploy.sh
```

---

## Deployment Docker for Linux(option 3)

### 1: Build the Docker Image Locally

After creating the `Dockerfile`, you can build the Docker image using the following command:

```bash
docker build -t your-dockerhub-username/crypto-react
```

### **Explanation:**

- Replace `your-dockerhub-username/your-react-app` with your Docker Hub username and repository name.

---

### 2: Log in to Docker Hub

Before pushing the image to Docker Hub, log in using the following command:

```bash
docker login
```

You will be prompted to enter your Docker Hub username and password.

---

## 3: Push the Docker Image to Docker Hub

Once you have successfully built the image, push it to your Docker Hub repository:

```bash
docker push your-dockerhub-username/crypto-react
```

## 4: Automate the Deployment on the Server

Once the image is pushed to Docker Hub, you can pull the image on your Linux server and run the container automatically using the following steps:

### 4.1 Install Docker on the Server

If Docker is not already installed on your server, you can install it by running the following commands (for Ubuntu):

```bash
sudo apt update
sudo apt install -y docker.io
```

### 4.2 Pull the Docker Image from Docker Hub

On your Linux server, pull the Docker image using:

```bash
docker pull your-dockerhub-username/crypto-react
```

### 4.3. Run the Docker Container**

Once the image is pulled, you can run the container:

```bash
docker run -d -p 80:80 --name react-app your-dockerhub-username/crypto-react
```

### **4.4 Check if the Container is Running**

Verify that the container is running:

```bash
docker ps
```

### 5: Automate Deployment Shell Script

To further automate the deployment process, you can create a shell script that pulls the latest Docker image from Docker Hub and restarts the container.

## Sample `deploy-docker.sh` Script

Create a file called `deploy.sh` on your server:

```bash
#!/bin/bash

# Define the image name
IMAGE="your-dockerhub-username/crypto-react"

docker pull $IMAGE
docker stop crypto-react
docker rm crypto-react
docker run -d -p 80:80 --name crypto-react $IMAGE

echo " complete!"
```

### **Make the Script Executable**

```bash
chmod +x deploy.sh
```

## 

**Nginx Configuration**

```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri /index.html;
    }

    error_page 404 /index.html;
}
```

```

```
