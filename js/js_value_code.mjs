import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { json_to } from "./json_to.mjs";
export function js_value_code(value) {
  arguments_assert(arguments, 1);
  ("a value written as JavaScript code writes it: a string in its quotes, and NaN, Infinity, -Infinity and undefined by their names");
  ("2026-10-17, at the human's asking: JSON has no way to write those four, so it writes NaN and the infinities as null and leaves undefined unwritten, and a learner whose line came to NaN was shown null. Everything JSON can write is still written by it, so every other value comes out as before. Not picked: writing every value with ",
    fn_name("text_to"),
    ", which loses a string's quotes. Inside a list or an object the four are still written as JSON writes them; no lesson holds one there yet");
  if (equal(value, undefined)) {
    let undefined_code = "undefined";
    return undefined_code;
  }
  if (equal(typeof value, "number") && not(Number.isFinite(value))) {
    let number_code = text_to(value);
    return number_code;
  }
  let code = json_to(value);
  return code;
}
