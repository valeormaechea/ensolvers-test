const { Sequelize } = require("sequelize");
const NoteModel = require("./models/note");

const sequelize = new Sequelize("tutorialdb", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

const Note = NoteModel(sequelize, Sequelize);
sequelize.sync({ force: false }).then(() => {
  console.log("Synced");
});

module.exports = {
  Note,
};
