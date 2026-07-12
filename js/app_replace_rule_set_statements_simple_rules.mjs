import { list_add_multiple } from "./list_add_multiple.mjs";
export function app_replace_rule_set_statements_simple_rules(rules) {
  list_add_multiple(rules, [
    "sm > ;",
    "sm > return ;",
    "sm > ex ;",
    "sm > return ex ;",
  ]);
}
