#!/bin/bash

echo -e "\n••••••••••••••••••••••• 启动 •••••••••••••••••••••••\n"

yarn

yarn prestart

pm2 reload ./deploy/ecosystem-production.json --env production