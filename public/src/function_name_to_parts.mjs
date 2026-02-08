import { text_split } from "../../../love/public/src/text_split.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
export function function_name_to_parts(f_name) {
  let separator = function_name_separator();
  let parts = text_split(f_name, separator);
  return parts;
}
