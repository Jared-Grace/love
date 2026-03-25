import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
export function app_replace_rule_set_expressions_function_calls_rules(rules) {
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "ce > mae",
    "ce > ce ( )",
    "ce > ce ( ag )",
    "ag > xe , ag",
    "ag > ex",
  ]);
}
