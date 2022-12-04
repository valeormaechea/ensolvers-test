const { Sequelize } = require("sequelize");
const NoteModel = require("./models/note");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Note = NoteModel(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Synced");
});

module.exports = {
  Note,
};