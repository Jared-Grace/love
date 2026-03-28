import { js_keyword_true } from "../../../love/public/src/js_keyword_true.mjs";
import { js_keyword_return } from "../../../love/public/src/js_keyword_return.mjs";
import { app_replace_rule_set_statements_simple_rules } from "../../../love/public/src/app_replace_rule_set_statements_simple_rules.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
export function app_replace_rule_set_statements_simple() {
  const rules = [];
  app_replace_rule_set_statements_simple_rules(rules);
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
        end: js_keyword_return() + " ;",
      },
      {
        start: "sm",
        end: "u p d a t e ( ) ;",
      },
      {
        start: "sm",
        end: js_keyword_return() + " " + js_keyword_true() + " ;",
      },
    ],
    why: "The replacement rules define a simple grammar for statements, allowing for empty statements, return statements, expression statements, and return-expression statements, with expressions limited to 'true' or a 'update()' call; this demonstrates a minimal subset of statement and expression syntax, likely for a programming language.",
  };
  return r;
}
