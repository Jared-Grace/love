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
    "idf > A",
    "idf > B",
    "idf > h",
    "idf > J",
    "idf > l",
    "idf > t",
    "idf > u",
    "idf > v",
    "idf > $",
    "idf > _",
    "di > 0",
    "di > 1",
    "di > 3",
  ];
  return r2;
}
