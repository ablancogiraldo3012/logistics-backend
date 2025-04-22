# Stage 1: Build
FROM node:20.19.0-alpine AS builder
WORKDIR /app

# Copiar dependencias
COPY package.json package-lock.json* ./
RUN npm ci --include=dev

# Copiar código y compilar
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20.19.0-alpine
WORKDIR /app

# Copiar solo lo necesario
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/src ./src
COPY --from=builder /app/dist ./dist

# Variables de entorno
ENV NODE_ENV=production
EXPOSE 3000

# Comando corregido
CMD ["node", "dist/server.js"]