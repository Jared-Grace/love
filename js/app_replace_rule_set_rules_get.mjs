import { app_replace_rules_parse } from "./app_replace_rules_parse.mjs";
import { property_get } from "./property_get.mjs";
export function app_replace_rule_set_rules_get(rs) {
  let rules = property_get(rs, "rules");
  let rules_parsed = app_replace_rules_parse(rules);
  return rules_parsed;
}
