import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_middle_space_nb } from "./text_combine_middle_space_nb.mjs";
export function app_code_button_unfinished_text(kind) {
  "$plain kind";
  "What the button leading to work left unfinished says: the arrow every way-forward button in this app wears, then the word for the kind of thing it goes to.";
  "IT NAMES THE KIND rather than saying only that something is unfinished, because a quiz of this lesson and a lesson of the course are different journeys - one stays on the page the learner is reading and the other leaves it - and a learner told only that work is waiting cannot tell which they are about to take.";
  arguments_assert(arguments, 1);
  let left = emoji_arrow_right();
  let right = text_combine("Next unfinished ", kind);
  let r = text_combine_middle_space_nb(left, right);
  return r;
}
