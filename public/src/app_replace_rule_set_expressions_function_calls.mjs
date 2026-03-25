import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_expressions_member_and_access_abbreviations } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_expressions_member_and_access_rules } from "../../../love/public/src/app_replace_rule_set_expressions_member_and_access_rules.mjs";
export function app_replace_rule_set_expressions_function_calls() {
  const rules = [];
  app_replace_rule_set_expressions_member_and_access_rules(rules);
  list_add_multiple(rules, [
    "ce > me",
    "ce > ce ( )",
    "ce > ce ( arg )",
    "arg > e , arg",
    "arg > e",
  ]);
  list_add(rules, "e > ce");
  let abbreviations = {};
  app_replace_rule_set_expressions_member_and_access_abbreviations(
    abbreviations,
  );
  object_merge(abbreviations, {
    ce: ["", "c", "all ", "e", "xpression"],
  });
  let r = {
    name: "Expressions function calls",
    abbreviations,
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
      {
        start: "ce",
        end: "id ( e )",
      },
      {
        start: "id ( e )",
        end: "id ( de )",
      },
      {
        start: "id ( arg )",
        end: "id ( e , e )",
      },
      {
        start: "id ( e , e )",
        end: "id ( i , e )",
      },
      {
        start: "id ( i , e )",
        end: "id ( i , i )",
      },
      {
        start: "id ( e )",
        end: "id ( id . id )",
      },
    ],
  };
  return r;
}
