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
    "id > u p d a t e",
    "id > p a g e",
    "id > r e f r e s h",
    "id > a d d",
    "id > d o u b l e",
    "id > w a g e",
    "id > m i n",
    "id > n o w",
  ]);
}
