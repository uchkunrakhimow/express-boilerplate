# Use official Node.js LTS image
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files separately to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the app
COPY . .

# Build the TypeScript code
RUN pnpm build

# ---- Production image ----
FROM node:22-alpine AS runtime

WORKDIR /app

# Install only prod dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy compiled output and necessary files
COPY --from=builder /app/dist ./dist
COPY .env .env

# Expose app port
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]
