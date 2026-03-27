import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { function_name_separator_trail } from "../../../love/public/src/function_name_separator_trail.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_names_others() {
  let mapped = app_replace_rule_sets_fns_names();
  let f_names = await functions_names();
  let difference = list_difference(f_names, mapped);
  ("starts with prefix but is not a rule set");
  let prefix = function_name_separator_trail(app_replace_rule_set.name);
  let filtered = list_filter_starts_with(difference, prefix);
  return filtered;
}
