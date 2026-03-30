import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
export function app_replace_rule_set_expressions_function_calls_rules(rules) {
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "ce > mae",
    "ce > ce ( )",
    "ce > ce ( ag )",
    "ag > ex , ag",
    "ag > ex",
    "id > f n",
    "id > update",
    "id > page",
    "id > refresh",
    "id > add",
    "id > knock",
    "id > building",
    "id > door",
    "id > all",
    "id > love",
    "id > list",
    "id > d o u b l e",
    "in > 0",
  ]);
}
