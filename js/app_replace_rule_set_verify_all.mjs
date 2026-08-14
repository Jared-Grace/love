import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { app_replace_rule_set_verify } from "./app_replace_rule_set_verify.mjs";
import { each } from "./each.mjs";
export function app_replace_rule_set_verify_all() {
  "Runs the check over every rule set there is, so nothing calling it has to know how many there are or what they are called.";
  let rule_sets = app_replace_rule_sets();
  each(rule_sets, app_replace_rule_set_verify);
}
