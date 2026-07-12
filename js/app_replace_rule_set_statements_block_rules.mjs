import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_statements_simple_rules } from "./app_replace_rule_set_statements_simple_rules.mjs";
export function app_replace_rule_set_statements_block_rules(rules) {
  app_replace_rule_set_statements_simple_rules(rules);
  list_add_multiple(rules, [
    "bs > { }",
    "bs > { smg }",
    "smg > sm",
    "smg > smg sm",
    "sm > bs",
  ]);
}
