import { app_replace_rule_set } from "../../../love/public/src/app_replace_rule_set.mjs";
import { function_name_separator_trail } from "../../../love/public/src/function_name_separator_trail.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
import { app_replace_rule_sets_names } from "../../../love/public/src/app_replace_rule_sets_names.mjs";
export async function sandbox() {
  let names = app_replace_rule_sets_names();
  let f_names = await functions_names();
  let c = function_name_separator_trail(app_replace_rule_set.name);
  let filtered = list_filter_starts_with(list, prefix);
}
