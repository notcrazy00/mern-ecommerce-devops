# Backend Dockerfile
FROM node:18-alpine

# Setiranje на working directory
WORKDIR /app

# Копирање на package.json и package-lock.json
COPY package*.json ./

# Инсталирање на dependencies
RUN npm ci --only=production

# Копирање на целиот backend код
COPY . .

# Експонирање на портот
EXPOSE 8000

# Создавање на non-root user за безбедност
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

# Променување на ownership на app директориумот
RUN chown -R nodejs:nodejs /app
USER nodejs

# Стартување на апликацијата
CMD ["npm", "start"]
