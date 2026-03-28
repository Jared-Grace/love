import { app_replace_rule_set_statements_variable_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_variable_abbreviations.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
import { js_code_assign } from "../../../love/public/src/js_code_assign.mjs";
import { js_code_let_assign } from "../../../love/public/src/js_code_let_assign.mjs";
import { app_replace_rule_set_expressions_primary_abbreviation_ex } from "../../../love/public/src/app_replace_rule_set_expressions_primary_abbreviation_ex.mjs";
export function app_replace_rule_set_statements_variable() {
  const rules = [];
  app_replace_rule_set_statements_variable_rules(rules);
  let abbreviations = {};
  app_replace_rule_set_expressions_primary_abbreviation_ex(abbreviations);
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  const y_eq_2 = js_code_assign("y", "2");
  let r = {
    name: "Statements Variable",
    abbreviations,
    rules,
    goals: [
      {
        start: "vs",
        end: "let i ;",
      },
      {
        start: "vs",
        end: js_code_let_assign("j", "0"),
      },
      {
        start: "vs",
        end: "var x , y ;",
      },
      {
        start: "vs",
        end: "var a , vd , vd ;",
      },
      {
        start: "var a , vd , vd ;",
        end: "var a , b , c ;",
      },
      {
        start: "vs",
        end: "const vdg , " + y_eq_2 + " ;",
      },
      {
        start: "const vdg , " + y_eq_2 + " ;",
        end: "const x = 1 , " + y_eq_2 + " ;",
      },
    ],
    why: "The replacement rules define a context-free grammar for variable declaration statements in a JavaScript-like language, demonstrating how variable keywords, identifiers, and optional initializations can be combined and separated by commas to form valid statements.",
  };
  return r;
}
