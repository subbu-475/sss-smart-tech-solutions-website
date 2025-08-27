# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for better Docker layer caching)
COPY package.json package-lock.json ./

# Install PM2 globally and dependencies
RUN npm install pm2 -g && \
    npm ci --only=production

# Copy application code
COPY . .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Change ownership of the app directory to nodejs user
RUN chown -R nodejs:nodejs /app
USER nodejs

# Expose the port the app runs on
EXPOSE 3001

# Health check using PM2
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD pm2 jlist | grep -q '"status":"online"' || exit 1

# Start the application with PM2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
