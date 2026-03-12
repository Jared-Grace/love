import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
export function app_replace_rule_set_integers_rules() {
  const rules = [
    "i > p g",
    "i > di",
    "g > di" + " g",
    "di > 0",
    "di > p",
    "g > di",
  ];
  let p = digits_positive();
  app_replace_rule_set_add_rights(rules, "p", p);
  return rules;
}
