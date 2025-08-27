# Multi-stage build to get React app from frontend build
FROM node:18-alpine AS frontend-build

WORKDIR /app

# Copy frontend files
COPY frontend/package.json frontend/package-lock.json ./
RUN npm ci

COPY frontend/ .
RUN npm run build

# Nginx stage
FROM nginx:alpine

# Remove all default nginx files
RUN rm -rf /usr/share/nginx/html/*
RUN rm -rf /etc/nginx/conf.d/
RUN rm -f /etc/nginx/nginx.conf

# Copy React app from frontend build stage
COPY --from=frontend-build /app/build /usr/share/nginx/html

# Copy custom nginx configuration - FIXED PATH
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Debug: List what files were copied
RUN ls -la /usr/share/nginx/html/
RUN ls -la /usr/share/nginx/html/assets/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
