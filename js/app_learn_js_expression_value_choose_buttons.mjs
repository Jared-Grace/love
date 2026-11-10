import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_expression_value_choose_buttons_generic } from "./app_learn_js_expression_value_choose_buttons_generic.mjs";
import { app_learn_js_expression_value_code } from "./app_learn_js_expression_value_code.mjs";
export function app_learn_js_expression_value_choose_buttons(
  parent,
  value,
  decoys,
  on_wrong,
) {
  arguments_assert(arguments, 4);
  ("the values to choose from, each button saying its value as it is written in the expression line");
  ('2026-11-10, at the human\'s asking: a piece of text is written in its quotes, as "self-control", the way the line writes it once chosen, so one value never looks two ways one press apart. Not picked: writing it bare, as console.log prints it, which belongs to an output screen and hides text from a number');
  let result = app_learn_js_expression_value_choose_buttons_generic(
    parent,
    value,
    decoys,
    on_wrong,
    app_learn_js_expression_value_code,
  );
  return result;
}
