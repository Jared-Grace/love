import { app_replace_rule_parse } from "../../../love/public/src/app_replace_rule_parse.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
export function app_replace_rules_parse_2(rules) {
  let mapped = list_map(rules, app_replace_rule_parse);
  return mapped;
}
