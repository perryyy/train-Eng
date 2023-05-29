
echo "--------------刪除舊dist----------------"
cd ..
rm -r dist
echo "--------------刪除完成----------------" 

echo "--------------建置專案----------------"
pnpm run build
echo "--------------建置完成----------------" 

cd ./server

node server.mjs

# note
# git Bash
# cd ./sh 
# ./build.sh