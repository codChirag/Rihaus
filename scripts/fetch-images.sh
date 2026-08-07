#!/usr/bin/env bash
# Helper script: download images from the source site into public/images
# Edit the URLS array to match the images you want to copy.

set -euo pipefail
mkdir -p public/images

URLS=(
  "https://www.therihaus.com/wp-content/uploads/2020/01/example-image-1.jpg"
  "https://www.therihaus.com/wp-content/uploads/2020/01/example-image-2.jpg"
)

for url in "${URLS[@]}"; do
  filename=$(basename "$url")
  echo "Downloading $url -> public/images/$filename"
  curl -L "$url" -o "public/images/$filename"
done

echo "Downloaded ${#URLS[@]} images."
