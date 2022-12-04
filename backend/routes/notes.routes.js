const router = require("express").Router();
const noteValidation = require("../helpers/notes.validator");
const noteController = require("../controllers/notes.controllers");

router.post("/newNote", noteValidation, noteController.newNote);
router.get("/", noteController.getAllNotes);
router.put("/:id", noteController.archiveNote);
router.get("/archive", noteController.getArchivedNotes);
router.delete("/:id", noteController.deleteNote);
router.get("/editNote/:id", noteController.getNote);
router.put("/editNote/:id", noteController.editNote);

module.exports = router;
