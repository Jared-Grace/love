import { string_suffix_without } from "../../../love/public/src/string_suffix_without.mjs";
import { function_name_separator } from "../../../love/public/src/function_name_separator.mjs";
import { function_rename_suffix_add_generic } from "../../../love/public/src/function_rename_suffix_add_generic.mjs";
export async function function_rename_suffix_remove(f_name_before, suffix) {
  function lambda(f_name_before, suffix) {
    let separator = function_name_separator();
    let sw = string_suffix_without(f_name_before, "" + separator + suffix);
    return sw;
  }
  let v = await function_rename_suffix_add_generic(
    f_name_before,
    suffix,
    lambda,
  );
  return v;
}
