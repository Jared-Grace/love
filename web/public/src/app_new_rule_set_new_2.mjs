import { js_keyword_let_while } from "../../../love/public/src/js_keyword_let_while.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(rules, ["ws > " + js_keyword_let_while() + " ( ex ) sm"]);
  let abbreviations = {};
  let r = {
    name: "TODO",
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
