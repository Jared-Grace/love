import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_statements_while_rules } from "./app_replace_rule_set_statements_while_rules.mjs";
export function app_replace_rule_set_statements_for_rules(rules) {
  app_replace_rule_set_statements_while_rules(rules);
  list_add_multiple(rules, ["fs > for ( ex ; ex ; ex ) sm"]);
}
