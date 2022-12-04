const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const apiRouter = require('./routes/notes.routes')

require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("Server running!");
});
app.use('/api',apiRouter)
