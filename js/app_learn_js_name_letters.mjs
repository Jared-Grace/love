import { arguments_assert } from "./arguments_assert.mjs";
import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export function app_learn_js_name_letters(avoid) {
  arguments_assert(arguments, 1);
  ("the one-letter names a question may give its variable: every lowercase letter but l, o and i, and but the letters in avoid - the ones the same program already uses");
  ("2026-11-13, at the human's asking: questions draw their names from these, so the same program shape no longer repeats letter for letter. l is the human's (it looks like 1 and I); o looks like 0; i is a loop's counter in this course.");
  let letters = list_alphabet_lower();
  let banned = list_concat(["l", "o", "i"], avoid);
  let allowed = list_without_multiple(letters, banned);
  return allowed;
}
