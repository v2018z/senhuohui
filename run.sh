#!/bin/bash

echo -e "\n••••••••••••••••••••••• 启动 •••••••••••••••••••••••\n"

yarn

yarn prebuild

pm2 reload ./deploy/ecosystem-production.json --env production