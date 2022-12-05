function pause() {
  read -p "$*"
}

echo
echo Notes App
echo
echo To continue with the process you need to have a mySQL database instance running on your computer.
echo
pause Press [Enter] key to continue...
clear
export mypath=$PWD
echo
echo Database variables configuration 
read -p "Database name: " dbname
read -p "Database host (localhost if local): " dbhost
read -p "Database user: " dbuser
read -p "Database password: " dbpass
clear
set +v
    echo "DB_NAME = $dbname" > "${mypath}/backend/.env"
    echo "DB_HOST = $dbhost" >> "${mypath}/backend/.env"
    echo "DB_USER = $dbuser" >> "${mypath}/backend/.env"
    echo "DB_PASS = $dbpass" >> "${mypath}/backend/.env"
    echo >> "${mypath}/backend/.env"
echo
echo Created .env DB file with data provided
echo You may modify it later
echo
pause Press [Enter] key to continue...
echo
echo Dependencies
echo Dependencies will be installed. It may take a while.
echo
pause Press [Enter] key to continue...
npm install 
cd backend
npm install
cd ..
cd frontend
npm install
cd ..
clear
echo
echo Installation finished. The app will start next.
echo
echo
pause Press [Enter] key to continue...
clear
npm start