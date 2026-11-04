import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_program_step_complete_words(noun) {
  arguments_assert(arguments, 1);
  ("the choice saying what is running is finished, noun being what the program's presses are called; the step-by-step's button, its guide and Show me the answer all say this, so they cannot come to disagree");
  let r = text_combine_multiple([
    "This ",
    noun,
    " is complete; continue to the next ",
    noun,
  ]);
  return r;
}
