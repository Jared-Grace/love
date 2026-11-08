import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_length(code) {
  arguments_assert(arguments, 1);
  ("how many items an array holds, written out as code: a gives a.length");
  let written = text_combine_multiple([code, ".length"]);
  return written;
}
