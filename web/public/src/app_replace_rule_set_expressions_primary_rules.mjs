import { js_keyword_null } from "../../../love/public/src/js_keyword_null.mjs";
import { app_replace_rule_set_boolean_literal_rules } from "../../../love/public/src/app_replace_rule_set_boolean_literal_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export function app_replace_rule_set_expressions_primary_rules(rules) {
  let added = [
    "pe > id",
    "id > x",
    "id > y",
    "pe > li",
    "pe > ( ex )",
    "li > nu",
    "nu > de",
    "de > 3.14",
    "nu > in",
    "in > 1",
    "in > 2",
    "li > st",
    'st > "luv"',
    text_combine("li > ", js_keyword_null()),
    "li > bo",
  ];
  list_add_multiple(rules, added);
  let items = app_replace_rule_set_boolean_literal_rules();
  list_add_multiple(rules, items);
}
