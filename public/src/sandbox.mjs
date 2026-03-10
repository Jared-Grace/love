import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { function_name_separator_trail } from "../../../love/public/src/function_name_separator_trail.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export async function sandbox() {
  let fns = app_replace_rule_sets_fns();
  let mapped = list_map_property(fns, "name");
  let f_names = await functions_names();
  let difference = list_difference(f_names, mapped);
  let prefix = function_name_separator_trail(app_replace_rule_set.name);
  let filtered = list_filter_starts_with(difference, prefix);
  return filtered;
}
