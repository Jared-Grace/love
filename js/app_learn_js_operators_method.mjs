import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_operator_includes_symbol } from "./app_learn_js_operator_includes_symbol.mjs";
import { app_learn_js_operator_index_of_symbol } from "./app_learn_js_operator_index_of_symbol.mjs";
export function app_learn_js_operators_method() {
  arguments_assert(arguments, 0);
  ('the operators a code lesson writes as an action reached by a dot, the thing acted on to the left and one thing in brackets to the right: a.includes("joy") and a.indexOf("joy")');
  let r2 = app_learn_js_operator_includes_symbol();
  let r3 = app_learn_js_operator_index_of_symbol();
  let r = [r2, r3];
  return r;
}
