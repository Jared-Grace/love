import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_strings_simple_rules_base } from "../../../love/public/src/app_replace_rule_set_strings_simple_rules_base.mjs";
export function app_replace_rule_set_identifiers_simple_rules() {
  const rules = app_replace_rule_set_strings_simple_rules_base();
  let r2 = [
    "id > idf",
    "id > idf idg",
    "idg > ida",
    "idg > ida idg",
    "ida > idf",
    "ida > di",
  ];
  list_add_multiple(r2, rules);
  return r2;
}
