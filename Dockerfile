# ---- Stage 1: Build frontend assets (React/Vite) ----
FROM node:20-alpine AS frontend

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# ---- Stage 2: PHP + Laravel app ----
FROM php:8.3-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    unzip \
    pkg-config \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libicu-dev \
    libsodium-dev \
    libcurl4-openssl-dev \
    mariadb-client \
    && docker-php-ext-configure gd --with-jpeg --with-freetype \
    && docker-php-ext-configure intl \
    && docker-php-ext-install pdo pdo_mysql mysqli mbstring exif pcntl bcmath gd zip intl sodium curl opcache \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

# Copy composer files first (better layer caching)
COPY composer.json composer.lock ./
RUN composer install --no-dev --no-scripts --no-autoloader --prefer-dist --ignore-platform-req=ext-intl

# Copy the rest of the application
COPY . .

# Ensure .env exists for build-time artisan commands (Railway env vars override at runtime)
RUN if [ ! -f .env ]; then cp .env.example .env; fi

# Copy built frontend assets from stage 1
COPY --from=frontend /app/public/build ./public/build

# Finish composer install (runs scripts, generates autoloader)
RUN composer dump-autoload --optimize \
    && php artisan config:clear

# Permissions for Laravel storage/cache
RUN chmod -R 775 storage bootstrap/cache

# Entry script: run migrations then start server
COPY docker-entrypoint.sh /usr/local/bin/docker-entrypoint.sh
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["docker-entrypoint.sh"]