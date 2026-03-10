import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_replace_rule_sets_fns } from "../../../love/public/src/app_replace_rule_sets_fns.mjs";
export function app_replace_rule_sets_fns_names() {
  let fns = app_replace_rule_sets_fns();
  let mapped = list_map_property(fns, "name");
  return mapped;
}
