import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { app_replace_rule_set_statements_variable_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_variable_abbreviations.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_statements_if() {
  const rules = [];
  app_replace_rule_set_statements_variable_rules(rules);
  app_replace_rule_set_statements_block_rules(rules);
  list_add_multiple(rules, [
    "is > " + js_keyword_if() + " ( ex ) sm",
    "is > " + js_keyword_if() + " ( ex ) sm " + js_keyword_else() + " sm",
    "sm > vs",
    "sm > bs",
    "ex > x < 0",
    "ex > x > 0",
    "ex > x = 1",
    "ex > y === null",
    "ex > positive = true",
    "ex > positive = false",
    "ex > y = 0",
    'ex > log ( " r e s e t " )',
    "ex > y >> max",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  object_merge(abbreviations, {
    is: ["", "i", "f ", "s", "tatement"],
  });
  let r = {
    name: "Statements If",
    rules,
    abbreviations,
    goals: [
      {
        start: "is",
        end: js_keyword_if() + " ( y === null ) return ;",
      },
      {
        start: "is",
        end: js_keyword_if() + " ( x < 0 ) { smg }",
      },
      {
        start: js_keyword_if() + " ( x < 0 ) { smg }",
        end: js_keyword_if() + " ( x < 0 ) { x = 1 ; }",
      },
      {
        start: "is",
        end: js_keyword_if() + " ( y > max ) { smg }",
      },
      {
        start: js_keyword_if() + " ( y > max ) { smg }",
        end:
          js_keyword_if() + ' ( y > max ) { y = 0 ; log ( " r e s e t " ) ; }',
      },
      {
        start: "is",
        end: js_keyword_if() + " ( x > 0 ) sm else sm",
      },
      {
        start: js_keyword_if() + " ( x > 0 ) sm else sm",
        end:
          js_keyword_if() +
          " ( x > 0 ) positive = true ; else positive = false ;",
      },
    ],
    why: "The replacement rules describe a grammar for JavaScript-like variable declarations, expressions, and if statements, demonstrating how to construct valid statements and blocks using keywords, identifiers, expressions, and control flow, as shown by the production rules and example goals.",
  };
  return r;
}
