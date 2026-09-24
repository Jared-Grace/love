import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function app_shared_input_amount(parent, label) {
  "$plain parent";
  "$plain label";
  "A box for an amount of money of nothing or more, which may have cents after a point, with its label over it, looking the same in every app. A phone shows its number keys with a point for it, and its arrows step by one hundredth.";
  arguments_assert(arguments, 2);
  let input = app_shared_input_type_label(parent, label, "number");
  html_attribute_set(input, "min", "0");
  html_attribute_set(input, "step", "0.01");
  html_attribute_set(input, "inputmode", "decimal");
  return input;
}
