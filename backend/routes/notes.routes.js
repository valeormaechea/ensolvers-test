const router = require("express").Router();
const noteValidation = require("../helpers/notes.validator");
const noteController = require("../controllers/notes.controllers");

router.post("/", noteValidation, noteController.newNote);
router.get("/", noteController.getAllNotes);

// router.post("/", noteValidation, async (req, res) => {
//   const note = await Note.create(req.body);
//   res.json(note);
// });
module.exports = router;
