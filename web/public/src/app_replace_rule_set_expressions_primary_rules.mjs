import { js_keyword_null } from "../../../love/public/src/js_keyword_null.mjs";
import { app_replace_rule_set_boolean_literal_rules } from "../../../love/public/src/app_replace_rule_set_boolean_literal_rules.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_replace_rule_set_expressions_primary_rules(rules) {
  let added = [
    "pe > id",
    "pe > li",
    "pe > ( ex )",
    "li > nu",
    "nu > de",
    "de > 3 . 1 4",
    "nu > in",
    "in > 1",
    "in > 2",
    "li > st",
    'st > " l u v "',
    "li > " + js_keyword_null(),
    "li > bo",
  ];
  list_add_multiple(rules, added);
  let items = app_replace_rule_set_boolean_literal_rules();
  list_add_multiple(rules, items);
}
