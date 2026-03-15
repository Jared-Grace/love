import { app_replace_rules_parse } from "../../../love/public/src/app_replace_rules_parse.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_replace_rule_set_rules_get(rs) {
  let rules = property_get(rs, "rules");
  let rules_parsed = app_replace_rules_parse(rules);
  return rules_parsed;
}
