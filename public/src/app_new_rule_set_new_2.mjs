import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_logical_expressions_abbreviations } from "../../../love/public/src/app_replace_rule_set_logical_expressions_abbreviations.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_replace_rule_set_logical_expressions_rules } from "../../../love/public/src/app_replace_rule_set_logical_expressions_rules.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_logical_expressions_rules(rules);
  list_add_multiple(rules, [
    "sm > ;",
    "sm > r e t u r n ;",
    "sm > ex ;",
    "sm > r e t u r n ex ;",
    "ex > true",
    "ex > u p d a t e ( )",
  ]);
  list_add(rules, "ex > ase");
  let abbreviations = {};
  app_replace_rule_set_logical_expressions_abbreviations(abbreviations);
  let r = {
    name: "Statements simple",
    abbreviations,
    rules,
    goals: [
      {
        start: "sm",
        end: ";",
      },
      {
        start: "sm",
        end: "r e t u r n ;",
      },
      {
        start: "sm",
        end: "u p d a t e ( ) ;",
      },
      {
        start: "sm",
        end: "r e t u r n true ;",
      },
    ],
  };
  return r;
}
