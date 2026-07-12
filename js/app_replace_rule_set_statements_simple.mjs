import { app_replace_rule_set_statements_simple_rules_ex } from "./app_replace_rule_set_statements_simple_rules_ex.mjs";
import { app_replace_rule_set_statements_simple_abbreviations } from "./app_replace_rule_set_statements_simple_abbreviations.mjs";
import { js_code_semicolon } from "./js_code_semicolon.mjs";
import { js_keyword_true } from "./js_keyword_true.mjs";
import { js_keyword_return } from "./js_keyword_return.mjs";
import { app_replace_rule_set_statements_simple_rules } from "./app_replace_rule_set_statements_simple_rules.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_statements_simple() {
  let rules = [];
  app_replace_rule_set_statements_simple_rules(rules);
  app_replace_rule_set_statements_simple_rules_ex(rules);
  let abbreviations = {};
  app_replace_rule_set_statements_simple_abbreviations(abbreviations);
  let r = {
    name: "Statements Simple",
    abbreviations,
    rules,
    goals: [
      {
        start: "sm",
        end: js_code_semicolon(),
      },
      {
        start: "sm",
        end: text_combine_multiple([
          js_keyword_return(),
          " ",
          js_code_semicolon(),
        ]),
      },
      {
        start: "sm",
        end: text_combine("update ( ) ", js_code_semicolon()),
      },
      {
        start: "sm",
        end: text_combine_multiple([
          js_keyword_return(),
          " ",
          js_keyword_true(),
          " ",
          js_code_semicolon(),
        ]),
      },
    ],
    why: "The replacement rules define a simple grammar for statements that can be empty, a return statement, an expression statement, or a return with an expression, where expressions are limited to the literals 'true' or the function call 'update()'.",
  };
  return r;
}
