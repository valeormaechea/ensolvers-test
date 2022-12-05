export const textLength = (input, minimum, maximum) => {
  if (input.length >= minimum && input.length <= maximum) {
    return true;
  } else {
    return false;
  }
};

export const findErrors = (note) => {
  const newErrors = {};
  if (textLength(note.title, 5, 30) === false) {
    newErrors.nombre = "Title must be between ";
  }
  if (textLength(note.content, 5, 100) === false) {
    newErrors.nombre = "Content must be between ";
  }

  return newErrors;
};