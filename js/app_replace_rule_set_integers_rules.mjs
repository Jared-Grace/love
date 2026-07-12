import { app_replace_rule_set_add_rights } from "./app_replace_rule_set_add_rights.mjs";
import { digits_positive } from "./digits_positive.mjs";
export function app_replace_rule_set_integers_rules() {
  let rules = [
    "in > pi ig",
    "in > di",
    "ig > di ig",
    "di > 0",
    "di > pi",
    "ig > di",
  ];
  let p = digits_positive();
  app_replace_rule_set_add_rights(rules, "pi", p);
  return rules;
}
