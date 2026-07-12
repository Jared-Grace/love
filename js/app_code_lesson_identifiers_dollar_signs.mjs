import { js_operator_dot_name } from "./js_operator_dot_name.mjs";
import { js_operator_dot } from "./js_operator_dot.mjs";
import { noop } from "./noop.mjs";
import { app_code_lesson_identifiers_underscores_generic } from "./app_code_lesson_identifiers_underscores_generic.mjs";
export function app_code_lesson_identifiers_dollar_signs() {
  let separator_valid = "$";
  let separator_valid_name = "dollar sign";
  let separator_invalid = js_operator_dot();
  let separator_invalid_name = js_operator_dot_name();
  let r = app_code_lesson_identifiers_underscores_generic(
    separator_invalid_name,
    separator_invalid,
    separator_valid_name,
    separator_valid,
    noop,
    ["underscores"],
    false,
  );
  return r;
}
