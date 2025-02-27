# Use the official Node.js image as the base
FROM node:20-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies with legacy peer deps to allow React 19
RUN npm install --legacy-peer-deps

# Copy the app source code to the container
COPY . .

RUN npm run build

# Expose the port the app will run on
EXPOSE 5173

# Start the app
CMD ["npm", "run", "start"]
