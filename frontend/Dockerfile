# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose Angular dev server port
EXPOSE 4200

# Run Angular dev server
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
