import { js_keyword_else } from "./js_keyword_else.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_replace_rule_set_statements_block_rules } from "./app_replace_rule_set_statements_block_rules.mjs";
import { app_replace_rule_set_statements_variable_rules } from "./app_replace_rule_set_statements_variable_rules.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_rule_set_statements_if_rules(rules) {
  app_replace_rule_set_statements_variable_rules(rules);
  app_replace_rule_set_statements_block_rules(rules);
  list_add_multiple(rules, [
    text_combine_multiple(["is > ", js_keyword_if(), " ( ex ) sm"]),
    text_combine_multiple([
      "is > ",
      js_keyword_if(),
      " ( ex ) sm ",
      js_keyword_else(),
      " sm",
    ]),
    "sm > vs",
    "sm > bs",
  ]);
}
