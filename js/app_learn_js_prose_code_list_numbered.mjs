import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_prose_code_list_generic } from "./app_learn_js_prose_code_list_generic.mjs";
export function app_learn_js_prose_code_list_numbered(parent, lines) {
  arguments_assert(arguments, 2);
  ("a numbered list of explanation lines (1, 2, 3), each line itself a parts-list of [kind, text]. Numbers rather than letters where the counting is the point: the first lesson of arrays shows a list a person counts from 1, so the array that counts from 0 has something to differ from.");
  let ol = app_learn_js_prose_code_list_generic(parent, lines, "decimal");
  return ol;
}
