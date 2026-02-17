import { text_suffix_without } from "../../../love/public/src/text_suffix_without.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
export function function_name_suffix_remove(f_name_before, suffix) {
  let separator = function_name_separator();
  let sw = text_suffix_without(f_name_before, "" + separator + suffix);
  return sw;
}
