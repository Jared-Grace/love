import { app_code_container_light_blue_div } from "./app_code_container_light_blue_div.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_string_concat_above_so_value } from "./app_code_lesson_expression_string_concat_above_so_value.mjs";
import { property_get } from "./property_get.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_code_lesson_expression_string_concat_above_order(root) {
  arguments_assert(arguments, 1);
  let r = app_code_lesson_expression_string_concat_above_so_value(root);
  let so_value = property_get(r, "so_value");
  let code_a = property_get(r, "code_a");
  let code_b = property_get(r, "code_b");
  let joined_value = property_get(r, "joined_value");
  let color = property_get(r, "color");
  html_font_color_set(so_value, color);
  let name_line = app_code_container_light_blue_div(root);
  html_span_text(
    name_line,
    "The proper name for combining two strings like this is ",
  );
  let name_term = html_span_text(name_line, "concatenation");
  html_bold(name_term);
  let order = app_code_container_light_blue(root);
  let r2 = {
    code_a,
    code_b,
    joined_value,
    order,
  };
  return r2;
}
