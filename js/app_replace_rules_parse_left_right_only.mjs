import { app_replace_rule_parse_left_right_only } from "./app_replace_rule_parse_left_right_only.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_rules_parse_left_right_only(rules) {
  let rules_parsed = list_map(rules, app_replace_rule_parse_left_right_only);
  return rules_parsed;
}
