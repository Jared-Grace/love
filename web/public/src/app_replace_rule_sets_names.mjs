import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
export function app_replace_rule_sets_names() {
  let rs = app_replace_rule_sets();
  let names = list_map_property(rs, "name");
  return names;
}
