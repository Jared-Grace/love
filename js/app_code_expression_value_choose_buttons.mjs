import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_value_choose_buttons_generic } from "./app_code_expression_value_choose_buttons_generic.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_expression_value_choose_buttons(
  parent,
  value,
  decoys,
  on_wrong,
) {
  arguments_assert(arguments, 4);
  ("the values to choose from, each button saying its value as it is written out");
  let result = app_code_expression_value_choose_buttons_generic(
    parent,
    value,
    decoys,
    on_wrong,
    text_to,
  );
  return result;
}
