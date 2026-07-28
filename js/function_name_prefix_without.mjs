import { property_get } from "./property_get.mjs";
import { function_name_separator } from "./function_name_separator.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function function_name_prefix_without(fn, fn_prefix) {
  let f_name = property_get(fn, "name");
  let fn_prefix_name = property_get(fn_prefix, "name");
  let separator = function_name_separator();
  let prefix = text_combine_multiple([fn_prefix_name, separator]);
  let without = text_prefix_without(f_name, prefix);
  return without;
}
