import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_field_title } from "./app_shared_field_title.mjs";
import { app_shared_textarea_reader_direction } from "./app_shared_textarea_reader_direction.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_shared_textarea_label(parent, label) {
  "$plain parent";
  "$plain label";
  "A box for writing a few lines, with a line of words over it saying what it is for, dressed like every other box in the apps and running the way the reader reads.";
  arguments_assert(arguments, 2);
  app_shared_field_title(parent, label);
  let textarea = app_shared_textarea_reader_direction(parent);
  app_shared_input_style(textarea);
  html_attribute_set(textarea, "rows", "4");
  html_style_set(textarea, "width", "100%");
  html_style_set(textarea, "box-sizing", "border-box");
  html_style_set(textarea, "resize", "vertical");
  return textarea;
}
