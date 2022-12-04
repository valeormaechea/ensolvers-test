const check = require("express-validator");
const validateResults = require("./validationResults");

const noteValidation = [
  check
    .check("title")
    .notEmpty()
    .withMessage("Note's title is necessary")
    .isLength({ min: 5, max: 30 })
    .withMessage("Must be between 5 and 30 characters long"),
  check
    .check("content")
    .notEmpty()
    .withMessage("Note's content is necessary")
    .isLength({ min: 5, max: 100 })
    .withMessage("Must be between 5 and 100 characters long"),

  (req, res, next) => {
    validateResults(req, res, next);
  },
];

module.exports = noteValidation;
