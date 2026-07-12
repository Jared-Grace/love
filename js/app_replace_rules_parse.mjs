import { app_replace_rule_parse } from "./app_replace_rule_parse.mjs";
import { list_map } from "./list_map.mjs";
export function app_replace_rules_parse(rules) {
  let mapped = list_map(rules, app_replace_rule_parse);
  return mapped;
}
