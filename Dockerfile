# Step 1: Use official Node.js image to build the app
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the entire project
COPY . .

# Build the React app
RUN npm run build

# Step 2: Set up the Nginx server to serve the built app
FROM nginx:alpine

# Copy the build directory from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]