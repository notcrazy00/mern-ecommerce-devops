# Frontend Dockerfile
FROM node:18-alpine AS build

# Setiranje на working directory
WORKDIR /app

# Копирање на package.json и package-lock.json
COPY package*.json ./

# Инсталирање на dependencies со legacy peer deps flag
RUN npm ci --legacy-peer-deps

# Копирање на source код
COPY . .

# Build на React апликацијата
RUN npm run build

# Production stage со nginx
FROM nginx:alpine

# Копирање на build файловите во nginx
COPY --from=build /app/build /usr/share/nginx/html

# Копирање на nginx конфигурација
COPY nginx.conf /etc/nginx/nginx.conf

# Експонирање на портот 80
EXPOSE 80

# Стартување на nginx
CMD ["nginx", "-g", "daemon off;"]