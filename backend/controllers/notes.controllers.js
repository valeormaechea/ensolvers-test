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
    const notes = await Note.findAll({ where: { archived: false } });
    console.log(notes);
    res.json(notes);
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};

const getArchivedNotes = async (req, res) => {
  try {
    const notes = await Note.findAll({ where: { archived: true } });
    res.json(notes);
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findByPk(req.params.id);
    console.log("get");
    res.json(note);
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};

const editNote = async (req, res) => {
  try {
    const note = await Note.update(
      {
        title: req.body.title,
        content: req.body.content,
        archived: req.body.archived,
      },
      { where: { id: req.params.id } }
    );
    res.json(note);
  } catch (error) {
    res.status(400).json({
      message: "Error",
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const note = await Note.destroy({ where: { id: req.params.id } });
    res.status(200).json({
      mensaje: "El producto se elimino correctamente",
    });
  } catch (error) {}
};

const archiveNote = async (req, res) => {
  try {
    const note = await Note.update(
      { archived: req.body.archived },
      { where: { id: req.params.id } }
    );
    res.status(200).json({
      mensaje: "Archived",
    });
  } catch (error) {}
};

module.exports = {
  newNote,
  getAllNotes,
  deleteNote,
  getArchivedNotes,
  archiveNote,
  getNote,
  editNote,
};