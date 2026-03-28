import { app_replace_rule_set_statements_block_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_block_abbreviations.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { app_replace_rule_set_statements_variable_abbreviations } from "../../../love/public/src/app_replace_rule_set_statements_variable_abbreviations.mjs";
import { app_replace_rule_set_statements_simple_rules } from "../../../love/public/src/app_replace_rule_set_statements_simple_rules.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_statements_simple_rules(rules);
  app_replace_rule_set_statements_variable_rules(rules);
  list_add_multiple(rules, [
    js_keyword_if() + " ( ex ) sm",
    js_keyword_if() + " ( ex ) sm " + js_keyword_else() + " sm",
    "sm > vs",
    "sm > bs",
  ]);
  let abbreviations = {};
  app_replace_rule_set_statements_variable_abbreviations(abbreviations);
  app_replace_rule_set_statements_block_abbreviations(abbreviations);
  let r = {
    name: "Statements if",
    rules,
    abbreviations,
    goals: [
      {
        start: "a",
        end: "b",
      },
    ],
  };
  return r;
}
