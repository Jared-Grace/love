import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { list_map_name } from "../../../love/public/src/list_map_name.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_transform(lambda3) {
  let fns = app_replace_rule_sets_fns_names();
  let result = list_map_name(fns);
  await functions_transform_list(result, lambda3);
  return result;
}
