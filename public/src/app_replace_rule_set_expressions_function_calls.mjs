import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
export function app_replace_rule_set_expressions_function_calls() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "ce > me",
    "ce > ce ( )",
    "ce > ce ( arg )",
    "arg > e, arg",
    "arg > e",
  ]);
  let r = {
    name: "Expressions function calls",
    rules,
    goals: [
      {
        start: "ce",
        end: "id",
      },
      {
        start: "ce",
        end: "id ( )",
      },
      {
        start: "ce",
        end: "id . id ( )",
      },
    ],
  };
  return r;
}
