const { Note } = require("../db");

const newNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json({
      message: "Note has been created succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "The note couldn't be created",
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    console.log("hola")
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};

module.exports = {
  newNote,
  getAllNotes,
};