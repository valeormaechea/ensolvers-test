require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const apiRouter = require("./routes/notes.routes");

require("./db");

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:3001"],
  })
);

app.listen(app.get("port"), () => {
  console.log("Server running on port " + app.get("port"));
});
app.use("/api", apiRouter);
