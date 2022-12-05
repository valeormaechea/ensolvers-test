@echo.
@echo Notes App
@echo.
@echo To continue with the process you need to have a mySQL database instance running on your computer.
@echo 
@echo.
@pause
@cls
@set mypath=%~dp0
@echo.
@echo Database variables configuration 
@echo.
@set /p DB_NAME=Database name: 
@set /p DB_HOST=Database host (localhost if local): 
@set /p DB_USER=Database username: 
@set /p DB_PASSWORD=User password: 
@cls
@echo off
    echo DB_NAME = ^%DB_NAME%>"%mypath%\backend\.env"
    echo DB_HOST = ^%DB_HOST%>>"%mypath%\backend\.env"
    echo DB_USER = ^%DB_USER%>>"%mypath%\backend\.env"
    IF [%DB_PASSWORD%]==[] (
        echo DB_PASSWORD = >>"%mypath%\backend\.env"
    ) ELSE (
        echo DB_PASSWORD = ^%DB_PASSWORD%>>"%mypath%\backend\.env"
    )
    echo.>>"%mypath%\backend\.env"
@echo on
@echo.
@echo Created .env DB file with data provided
@echo You may modify it later
@echo.
@echo Dependencies
@echo Dependencies will be installed. It may take a while.
@echo.
@pause
@call npm install 
@call cd backend
@call npm install
@call cd ..
@call cd frontend
@call npm install
@call cd ..
@cls
@echo.
@echo Installation finished. The app will start next.
@echo.
@echo.
@pause
@cls
@call npm start