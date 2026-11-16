FROM node:20-alpine

WORKDIR /app

# Copy package definition and install dependencies
COPY package*.json ./
RUN npm install --production

# Copy project files
COPY . .

# Render exposes PORT environment variable (default 10000)
ENV PORT=10000
EXPOSE 10000

# Start server
CMD ["node", "server.js"]
