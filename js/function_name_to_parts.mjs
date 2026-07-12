import { text_split } from "./text_split.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { log } from "./log.mjs";
export function function_name_to_parts(f_name) {
  let separator = function_name_separator();
  let parts = text_split(f_name, separator);
  return parts;
}
