import { app_replace_rule_set_statements_simple_rules_ex } from "./app_replace_rule_set_statements_simple_rules_ex.mjs";
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
  let v = js_keyword_return();
  let v2 = js_code_semicolon();
  let right = js_code_semicolon();
  let v3 = js_keyword_return();
  let t = js_keyword_true();
  let v4 = js_code_semicolon();
  let r = {
    name: "Statements Simple",
    rules,
    goals: [
      {
        start: "sm",
        end: js_code_semicolon(),
      },
      {
        start: "sm",
        end: text_combine_multiple([v, " ", v2]),
      },
      {
        start: "sm",
        end: text_combine("update ( ) ", right),
      },
      {
        start: "sm",
        end: text_combine_multiple([v3, " ", t, " ", v4]),
      },
    ],
    why: "An expression stands for a value; a statement is one whole instruction, ending in a semicolon. It can be empty, it can hand a value back with return, or it can be an expression on its own.",
  };
  return r;
}
