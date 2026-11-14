import { fn_name } from "./fn_name.mjs";
import { js_operators_binary } from "./js_operators_binary.mjs";
import { js_operator_plus } from "./js_operator_plus.mjs";
import { list_concat_single_right } from "./list_concat_single_right.mjs";
import { js_operator_and } from "./js_operator_and.mjs";
import { js_operator_or } from "./js_operator_or.mjs";
import { app_learn_js_operator_index_symbol } from "./app_learn_js_operator_index_symbol.mjs";
import { list_get } from "./list_get.mjs";
import { math_max } from "./math_max.mjs";
import { math_min } from "./math_min.mjs";
import { app_learn_js_operator_includes_symbol } from "./app_learn_js_operator_includes_symbol.mjs";
import { list_or_text_includes } from "./list_or_text_includes.mjs";
import { list_concat } from "./list_concat.mjs";
export function app_learn_js_operators_solvable() {
  "every operator a code lesson may put between two things and then work out, each carrying the function that works it out";
  ("It is ",
    fn_name("js_operators_binary"),
    " with plus and && added back. Plus is left out there on purpose, because between two things of unknown kind it may either add numbers or join words, and nothing beside it says which. A lesson knows what it built, so here the question does not arise.");
  ("&& and || are left out there for a different reason: that list is what the auto pass rewrites into calls, and either one stops working the moment it becomes one - it is written to leave its right side alone when the left has already settled the answer, and a call works both sides out before it is entered. A lesson never rewrites anything, so here it is simply an operator with a function beside it like the rest.");
  let operators = js_operators_binary();
  let plus = js_operator_plus();
  let with_plus = list_concat_single_right(operators, plus);
  let anding = js_operator_and();
  let with_and = list_concat_single_right(with_plus, anding);
  let oring = js_operator_or();
  let with_or = list_concat_single_right(with_and, oring);
  ("2026-11-09: reading an item by its index joins them, for the array lessons; it has an array on its left and the index on its right, and only these lessons ever build one");
  let index_symbol = app_learn_js_operator_index_symbol();
  let indexing = {
    operator: index_symbol,
    fn: list_get,
  };
  let with_index = list_concat_single_right(with_or, indexing);
  ("2026-11-12, at the human's asking: Math.max and Math.min act on two things and are worked out as the operators between two things are, so the Statements lessons that keep a value inside its edges can be stepped through");
  let larger = {
    operator: "Math.max",
    fn: math_max,
  };
  let smaller = {
    operator: "Math.min",
    fn: math_min,
  };
  ('2026-11-13, at the human\'s asking: s.includes("e") has the string on its left and the piece on its right, so the string lessons can be stepped through');
  let including = {
    operator: app_learn_js_operator_includes_symbol(),
    fn: list_or_text_includes,
  };
  ('2026-11-14, at the human\'s asking: a.includes("joy") on an array is stepped through the same way, so the one operator works out either kind');
  let all = list_concat(with_index, [larger, smaller, including]);
  return all;
}
