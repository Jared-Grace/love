import { app_replace_rule_set_add_rights } from "../../../love/public/src/app_replace_rule_set_add_rights.mjs";
import { digits_positive } from "../../../love/public/src/digits_positive.mjs";
export function app_replace_rule_set_integers_rules(digit_name) {
  const rules = [
    "i > p g",
    "i > " + digit_name,
    "g > " + digit_name + " g",
    digit_name + " > 0",
    digit_name + " > p",
    "g > " + digit_name,
  ];
  let p = digits_positive();
  app_replace_rule_set_add_rights(rules, "p", p);
  return rules;
}
