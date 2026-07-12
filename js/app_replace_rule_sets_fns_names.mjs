import { list_map_name } from "./list_map_name.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
export function app_replace_rule_sets_fns_names() {
  let fns = app_replace_rule_sets_fns();
  let mapped = list_map_name(fns);
  return mapped;
}
