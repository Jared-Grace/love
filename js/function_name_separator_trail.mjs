import { function_name_separator } from "./function_name_separator.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function function_name_separator_trail(a_name) {
  let separator = function_name_separator();
  let c = text_combine_multiple([a_name, separator]);
  return c;
}
