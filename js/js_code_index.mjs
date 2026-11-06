import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_index(code, index) {
  arguments_assert(arguments, 2);
  ("an item of an array read by its index, written out as code: a and 0 give a[0]");
  let written = text_combine_multiple([code, "[", index, "]"]);
  return written;
}
