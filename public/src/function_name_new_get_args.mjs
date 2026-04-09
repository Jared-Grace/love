import { dictionary_functions_to_names } from "../../../love/public/src/dictionary_functions_to_names.mjs";
import { property_exists_if_get } from "../../../love/public/src/property_exists_if_get.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { list_concat_single } from "../../../love/public/src/list_concat_single.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_name_unalias_only } from "../../../love/public/src/function_name_unalias_only.mjs";
export async function function_name_new_get_args(plugin_fn, f_name_old, args) {
  f_name_old = await function_name_unalias_only(f_name_old);
  let split = text_split_comma(args);
  let args_run = list_concat_single(f_name_old, split);
  let overrides_fns = {
    c: function_name_combine,
  };
  let overrides = dictionary_functions_to_names(overrides_fns);
  plugin_fn = property_exists_if_get(overrides, plugin_fn);
  let f_name_new = await function_run(plugin_fn, args_run);
  let r2 = {
    f_name_new,
    f_name_old,
  };
  return r2;
}
