import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_home_just_left_next(just_left, button, left_is) {
  "$plain left_is";
  "The row of the home list the learner has just come back from, once this one row has been considered: this row where it is the one they left, and whatever was found already where it is not.";
  "BOTH KINDS OF ROW ASK IT - the lessons, and the review checkpoints standing between them - which is the whole reason it is a function rather than a line written twice. Coming back from either has to land the learner at the row they pressed, and a second copy of the answer written for reviews would be free to drift from the one written for lessons.";
  "It is carried along the run rather than worked out from the row alone, for the same reason the way-mark is: what is being asked is about the run of rows, not about any one of them.";
  arguments_assert(arguments, 3);
  if (left_is) {
    return button;
  }
  return just_left;
}
