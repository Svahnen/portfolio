#!/bin/bash
npm run build
sleep 1
cp index.php public/
cp .htaccess public/
cd public
git init
heroku git:remote -a svahnen