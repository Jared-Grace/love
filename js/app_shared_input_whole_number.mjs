import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_input_type_label } from "./app_shared_input_type_label.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function app_shared_input_whole_number(parent, label) {
  "$plain parent";
  "$plain label";
  "A box for a whole number of nothing or more, with its label over it, looking the same in every app. A phone shows its number keys for it rather than letters, and its arrows step by one.";
  arguments_assert(arguments, 2);
  let input = app_shared_input_type_label(parent, label, "number");
  html_attribute_set(input, "min", "0");
  html_attribute_set(input, "step", "1");
  html_attribute_set(input, "inputmode", "numeric");
  return input;
}
