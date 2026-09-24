import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { html_input_type } from "./html_input_type.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
export function app_shared_input_type_label(parent, label, input_type) {
  "$plain parent";
  "$plain label";
  "$plain input_type";
  "A box of one kind with a line of words over it saying what it is for, dressed like every other box in the apps - the one way a date or a time is asked for, so each app asks for it the same.";
  arguments_assert(arguments, 3);
  app_shared_field_title(parent, label);
  let input = html_input_type(parent, input_type);
  app_shared_input_style(input);
  return input;
}
