# Notes App

This notes app is made to create, edit, delete and archive different notes, just like post-its!

## Dependencies

- Backend dependencies:

  - [cors](https://www.npmjs.com/package/cors) (v2.8.5)
  - [dotenv](https://www.npmjs.com/package/dotenv) (v16.0.3)
  - [express](https://expressjs.com/es/) (v4.18.2)
  - [express.validator](https://express-validator.github.io/docs/) (v6.14.2)
  - [mysql](https://www.npmjs.com/package/mysql2) (v2.3.3)
  - [nodemon](https://www.npmjs.com/package/nodemon) (v2.0.20)
  - [sequelize](https://sequelize.org/) (v6.26.0)

- Frontend dependencies:

  - [React-Bootstrap](https://react-bootstrap.github.io/) (v2.6.0)
  - [SweetAlert](https://sweetalert2.github.io/#download) (v11.6.15)
  - [Bootstrap](https://getbootstrap.com/) (v5.2.3)
  - [react-router-dom](https://reactrouter.com/en/main) (v6.4.4)
  - [axios](https://axios-http.com/docs/intro) (v1.2.0)
  - [fontAwesome](https://fontawesome.com/)

- Global dependencies:
  - [concurrently](https://www.npmjs.com/package/concurrently) (v7.6.0)

## Installation

In order to run this app, you have to clone this project into your computer and do one of the following:

- Method I:

  - Windows: execute the `init.bat` script provided in the root directory.

  - Linux/MacOs: execute the `init.sh` script provided in the root directory (has not been tested)

- Method II: manual installation.
  After cloning the project, open a terminal in the root directory. Then, run the following commands in the order provided:

  - First: install dependencies.
    - To install global dependencies:
      ```
      npm i
      ```
    - To install frontend dependencies:
      ```
      cd frontend
      npm i
      ```
    - To install backend dependencies:
      ```
      cd ..
      cd backend
      npm i
      ```
  - Second: create a database. This app works with MySQL databases. Therefore, you must create a local one with administrative priviliges, or a cloud-based one. Tables will create automatically.

  - Third: modify the .env file in `/backend/.env` with the information from your own database.

## Usage

### Make sure you have your database running!

If you didn't use Method I for installation, run this command in the root directory to start the application:

```
npm start
```

## Author

**_Maria Valentina Ormaechea_** - Full Stack MERN Developer
