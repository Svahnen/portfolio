#!/bin/bash
npm run build
sleep 1
cp -a heroku/. public/
