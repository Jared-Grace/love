import { property_get } from "./property_get.mjs";
import { app_code_lesson_expression_string_concat_above_so_value } from "./app_code_lesson_expression_string_concat_above_so_value.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold } from "./html_bold.mjs";
export function app_code_lesson_expression_string_concat_above(root) {
  arguments_assert(arguments, 1);
  ("anchor on the plus the learner already knows (it adds numbers), then reveal it does something different for strings - it combines them. The value is derived by reducing the combination to a plain string literal they already understand (the value of the two joined is the same as the value of one string written out), then the proper name is attached. Finally the order is made concrete with left and right rather than abstract firsts, and the absence of any space is stated outright.");
  let r = app_code_lesson_expression_string_concat_above_so_value(root);
  let so_value = property_get(r, "so_value");
  let code_a = property_get(r, "code_a");
  let code_b = property_get(r, "code_b");
  let joined_value = property_get(r, "joined_value");
  let color = property_get(r, "color");
  html_font_color_set(so_value, color);
  let name_box = app_code_container_light_blue(root);
  let name_line = html_div(name_box);
  html_span_text(
    name_line,
    "The proper name for combining two strings like this is ",
  );
  let name_term = html_span_text(name_line, "concatenation");
  html_bold(name_term);
  let order = app_code_container_light_blue(root);
  let left_line = html_div(order);
  html_span_text(left_line, "The left string is ");
  html_span_text_code_dark(left_line, code_a);
  let right_line = html_div(order);
  html_span_text(right_line, "The right string is ");
  html_span_text_code_dark(right_line, code_b);
  let after_line = html_div(order);
  html_span_text_code_dark(after_line, "+");
  html_span_text(
    after_line,
    " puts the right string immediately after the left string",
  );
  let space_line = html_div(order);
  html_span_text(space_line, "There is no space between them: ");
  app_code_string_colored(space_line, joined_value);
}
