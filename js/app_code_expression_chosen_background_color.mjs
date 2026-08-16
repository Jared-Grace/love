import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_chosen_background_color() {
  arguments_assert(arguments, 0);
  ("the colour a piece of a line wears while it is the piece being worked out: the block a learner has just chosen, the words naming it, and what it comes to on its way down");
  ("Blue rather than green. Green is what this app says well done in - every button, every finish, every right answer - so a block turning green in the middle of a line reads as the line being finished rather than as the line being pointed at. Nothing has been finished at that moment; one piece has been singled out, and the next thing the learner does is watch it change.");
  ("The deepest step of the shared blue is what it reads from, so it is the same blue the rest of the app is built in rather than a colour chosen here, and white lettering is legible on it.");
  let color = app_shared_color_blue_dark();
  return color;
}
