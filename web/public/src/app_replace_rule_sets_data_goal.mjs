import { json_to } from "../../../love/public/src/json_to.mjs";
import { property_initialize_empty } from "../../../love/public/src/property_initialize_empty.mjs";
export function app_replace_rule_sets_data_goal(value, rule_name, goal) {
  let r = property_initialize_empty(value, rule_name);
  let json = json_to(goal);
  let g = property_initialize_empty(r, json);
  return g;
}
