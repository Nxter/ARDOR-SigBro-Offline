#!/bin/bash

# exec `npm -g install uglify-js` before

LISTJS=`cat index.html | grep -v 'text/javascript' | grep script | awk -F '"' '{ print $2 }'`
LISTCSS=`cat index.html | grep stylesheet | awk -F '"' '{ print $4}'`

uglifyjs $LISTJS --compress --mangle -o sigbro-ardor.js 

cat index.html | grep -v "script src" | grep -v "stylesheet" | grep -v "</body></html>" > ardor.html

echo "<style>" >> ardor.html
cat $LISTCSS >> ardor.html
echo "</style>" >> ardor.html

echo "<script>" >> ardor.html
cat sigbro-ardor.js >> ardor.html
echo "</script>" >> ardor.html
echo "</body></html>" >> ardor.html

rm -f sigbro-ardor.js


