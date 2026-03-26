import { app_replace_rule_parse_left_right_only } from "../../../love/public/src/app_replace_rule_parse_left_right_only.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function app_replace_rules_parse_2(rules) {
  let mapped = list_map(rules, app_replace_rule_parse_left_right_only);
  return mapped;
}
