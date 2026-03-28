import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { app_replace_rule_set_statements_variable_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_variable_abbreviations.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
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
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  object_merge(abbreviations, {
    is: ["", "i", "f ", "s", "tatement"],
  });
  let r = {
    name: "Statements if",
    rules,
    abbreviations,
    goals: [
      {
        start: "is",
        end: js_keyword_if() + " ( y === null ) return ;",
      },
      {
        start: "is",
        end: js_keyword_if() + " ( x < 0 ) { x = 1 ; }",
      },
      {
        start: "is",
        end:
          js_keyword_if() +
          " ( x > 0 ) positive = true ; else positive = false ;",
      },
    ],
    why: "The replacement rules define a grammar for JavaScript-like variable declarations, expressions, and statements, with a focus on parsing if statements and their associated blocks, demonstrating how conditional logic and variable handling are structured in such languages.",
  };
  return r;
}
