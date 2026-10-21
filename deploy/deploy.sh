#!/usr/bin/env bash
# Runs on the home server every minute (cron). Pulls the images GitHub built and, only when
# the site image changed, restarts it and reloads the content into Redis.
# Reference copy; the server runs its own copy in ~/deploy/portfolio.
set -euo pipefail

cd "$(dirname "$0")"
exec 9>.deploy.lock
flock -n 9 || exit 0

WEB=ghcr.io/golamwasy/portfolio-web:latest
SEED=ghcr.io/golamwasy/portfolio-seed:latest
id() { docker image inspect -f '{{.Id}}' "$1" 2>/dev/null || echo none; }

before="$(id "$WEB") $(id "$SEED")"
docker compose pull --quiet web seed >/dev/null 2>&1 || { echo "$(date -Is) pull failed"; exit 1; }
after="$(id "$WEB") $(id "$SEED")"

# Also recover when the containers are missing (for example after a reboot wiped them).
running="$(docker compose ps --status running --services | grep -cx web || true)"
if [ "$before" = "$after" ] && [ "$running" = 1 ] && [ "${1:-}" != "--force" ]; then
  exit 0
fi

echo "$(date -Is) deploying $after"
docker compose up -d --remove-orphans web redis
docker compose --profile tools run --rm seed
echo "$(date -Is) done"
