import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_suffix } from "./js_file_suffix.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_file_name(f_name) {
  arguments_assert(arguments, 1);
  ("the file a function of this name lives in - its own name with the module suffix on the end");
  ("one function to a file is the repo's whole layout, so this step stood written out nineteen times, and the suffix with it.");
  let v = js_file_suffix();
  let name = text_combine_multiple([f_name, v]);
  return name;
}
