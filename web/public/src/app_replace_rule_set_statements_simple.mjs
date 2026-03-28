import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_simple() {
  const rules = [];
  list_add_multiple(rules, [
    "sm > ;",
    "sm > return ;",
    "sm > ex ;",
    "sm > return ex ;",
    "ex > true",
    "ex > u p d a t e ( )",
  ]);
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  object_merge(abbreviations, {
    sm: ["", "s", "tate", "m", "ent"],
  });
  let r = {
    name: "Statements Simple",
    abbreviations,
    rules,
    goals: [
      {
        start: "sm",
        end: ";",
      },
      {
        start: "sm",
        end: "return ;",
      },
      {
        start: "sm",
        end: "u p d a t e ( ) ;",
      },
      {
        start: "sm",
        end: "return true ;",
      },
    ],
    why: "The replacement rules define a simple grammar for statements, allowing for empty statements, return statements, expression statements, and return-expression statements, with expressions limited to 'true' or a 'update()' call; this demonstrates a minimal subset of statement and expression syntax, likely for a programming language.",
  };
  return r;
}
