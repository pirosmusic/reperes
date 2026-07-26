#!/usr/bin/env bash
# Reconstruit index.html à partir des sources dans src/
set -e
cd "$(dirname "$0")/src"
cat head.html data1.js data2.js data3.js data4.js core.js views.js tail.html > ../index.html
echo "index.html régénéré."
