# Use a specific Node.js version for stability
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json first for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Set environment variable for the port
ENV PORT=4000

# Expose the port the app runs on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]
