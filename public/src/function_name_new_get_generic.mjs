import { function_name_parts_delete } from "../../../love/public/src/function_name_parts_delete.mjs";
import { lambda_right } from "../../../love/public/src/lambda_right.mjs";
import { property_exists_if_get } from "../../../love/public/src/property_exists_if_get.mjs";
import { dictionary_functions_to_names } from "../../../love/public/src/dictionary_functions_to_names.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get_generic(f_name_old, plugin_fn) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let overrides = {
    c: function_name_combine,
    r: lambda_right,
    d: function_name_parts_delete,
  };
  dictionary_functions_to_names(overrides);
  plugin_fn = property_exists_if_get(overrides, plugin_fn);
  let r = {
    f_name_old,
    plugin_fn,
  };
  return r;
}
