import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_statements_block_rules } from "../../../love/public/src/app_replace_rule_set_statements_block_rules.mjs";
import { app_replace_rule_set_statements_variable_rules } from "../../../love/public/src/app_replace_rule_set_statements_variable_rules.mjs";
export function app_replace_rule_set_statements_if_rules(rules) {
  app_replace_rule_set_statements_variable_rules(rules);
  app_replace_rule_set_statements_block_rules(rules);
  list_add_multiple(rules, [
    "is > " + js_keyword_if() + " ( ex ) sm",
    "is > " + js_keyword_if() + " ( ex ) sm " + js_keyword_else() + " sm",
    "sm > vs",
    "sm > bs",
  ]);
  list_add_multiple(rules, [
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
}
