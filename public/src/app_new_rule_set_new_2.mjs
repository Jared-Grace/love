import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  app_replace_rule_set_statements_variable_rules(rules);
  list_add_multiple(rules, [
    js_keyword_if() + " ( ex ) sm",
    js_keyword_if() + " ( ex ) sm else sm",
  ]);
  let abbreviations = {};
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
