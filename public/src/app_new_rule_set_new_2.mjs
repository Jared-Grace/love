import { js_keyword_while } from "../../../love/public/src/js_keyword_while.mjs";
import { list_add_multiple } from "../../../love/public/src/list_add_multiple.mjs";
export function app_new_rule_set_new_2() {
  const rules = [];
  list_add_multiple(rules, [
    "ws > " + js_keyword_while() + " ( ex ) sm",
    "x > x < 3 || x === 3",
  ]);
  let abbreviations = {};
  let r = {
    name: "TODO",
    rules,
    abbreviations,
    goals: [
      {
        start: "ws",
        end: js_keyword_while() + " ( x < 3 || x === 3 ) sm",
      },
    ],
  };
  return r;
}
