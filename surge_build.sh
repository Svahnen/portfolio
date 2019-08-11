#!/bin/bash
npm run build
sleep 1
cp 200.html public/200.html
sleep 1
surge ./public svahnen.com