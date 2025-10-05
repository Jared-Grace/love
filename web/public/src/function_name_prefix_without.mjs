import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { string_prefix_without } from "../../../love/public/src/string_prefix_without.mjs";
export function function_name_prefix_without(fn, fn_prefix) {
  let fn_name = object_property_get(fn, "name");
  let fn_prefix_name = object_property_get(fn_prefix, "name");
  let without = string_prefix_without(
    fn_name,
    "" + fn_prefix_name + function_name_separator(),
  );
  return without;
}
