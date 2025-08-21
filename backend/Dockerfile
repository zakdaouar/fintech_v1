# ---------- deps ----------
FROM node:20-alpine AS deps
WORKDIR /app
# Copie les manifestes pour tirer profit du cache
COPY package*.json ./
# Installe les dépendances (utilise ci si le lockfile existe)
RUN npm ci || npm install

# ---------- builder ----------
FROM node:20-alpine AS builder
WORKDIR /app
# OpenSSL 3 + compat 1.1 (pour Prisma) + certificats
RUN apk add --no-cache openssl openssl1.1-compat ca-certificates
# Récupère node_modules de l'étape deps
COPY --from=deps /app/node_modules ./node_modules
# Copie tout le code backend (contexte Render = backend/)
COPY . .
# Génère le client Prisma (après avoir copié prisma/)
RUN npx prisma generate
# Si tu compiles du TypeScript, décommente la ligne suivante et assure un script "build" :
# RUN npm run build

# ---------- runner ----------
FROM node:20-alpine AS runner
WORKDIR /app
# Librairies nécessaires à l'exécution Prisma
RUN apk add --no-cache openssl openssl1.1-compat ca-certificates
ENV NODE_ENV=production
# Assure-toi que ton serveur lit process.env.PORT
ENV PORT=3001
EXPOSE 3001
# Copie l’app construite
COPY --from=builder /app ./
# Migrations DB au démarrage puis lancement du serveur
CMD ["sh", "-c", "npx prisma migrate deploy && node src/server.js"]
