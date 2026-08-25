#!/bin/sh
set -e

# Generate app key if not already set (safe to run every time; Laravel skips if APP_KEY exists)
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --force
fi

# Cache config/routes/views for speed
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Run database migrations
php artisan migrate --force

# Start Laravel using Railway's assigned port (defaults to 8080 locally)
php artisan serve --host=0.0.0.0 --port=${PORT:-8080}