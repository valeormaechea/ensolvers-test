export const textLength = (input,minimum,maximum) => {
    if (input.length >= minimum && input.length <= maximum) {
      console.log(input);
      return true;
    } else {
      return false;
    }
  };
