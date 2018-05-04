#!/bin/bash
npm run build
sleep 1
cp index.php public/
cd public
git init
heroku git:remote -a svahnen
git pull heroku master