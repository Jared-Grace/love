import { js_keyword_while } from "../../../love/public/src/js_keyword_while.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { app_replace_rule_set_statements_if_rules } from "../../../love/public/src/app_replace_rule_set_statements_if_rules.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_replace_rule_set_statements_while_rules(rules) {
  app_replace_rule_set_statements_if_rules(rules);
  list_add_multiple(rules, [
    text_combine_multiple(["ws > ", js_keyword_while(), " ( ex ) sm"]),
  ]);
}
