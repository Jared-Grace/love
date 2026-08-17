import { arguments_assert } from "./arguments_assert.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_string_code } from "./app_code_string_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_string_value_color } from "./app_code_string_value_color.mjs";
import { app_code_string_value_color_on_light } from "./app_code_string_value_color_on_light.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_expression_string_concat_value_word } from "./app_code_lesson_expression_string_concat_value_word.mjs";
import { app_code_string_colored } from "./app_code_string_colored.mjs";
export function app_code_lesson_expression_string_concat_above_remember_line(
  two,
  a,
  root,
) {
  arguments_assert(arguments, 3);
  let b = list_get(two, 1);
  let code_a = app_code_string_code(a);
  let code_b = app_code_string_code(b);
  let join_code = text_combine_multiple([code_a, " + ", code_b]);
  let joined_value = text_combine_multiple([a, b]);
  let color = app_code_string_value_color();
  let on_light = app_code_string_value_color_on_light();
  let concept = app_code_container_light_blue(root);
  let seen_line = html_div(concept);
  html_span_text(seen_line, "You've seen that ");
  html_span_text_code_dark(seen_line, "+");
  html_span_text(seen_line, " adds two numbers together");
  let different_line = html_div(concept);
  html_span_text_code_dark(different_line, "+");
  html_span_text(different_line, " does something different for strings");
  let combines_line = html_div(concept);
  html_span_text_code_dark(combines_line, "+");
  html_span_text(combines_line, " combines two strings into one");
  let looks_line = html_div(concept);
  html_span_text(looks_line, "It looks like this: ");
  html_span_text_code_dark(looks_line, join_code);
  let derive = app_code_container_light_blue(root);
  let same_line = html_div(derive);
  html_span_text(same_line, "The ");
  app_code_lesson_expression_string_concat_value_word(same_line, on_light);
  html_span_text(same_line, " of ");
  html_span_text_code_dark(same_line, join_code);
  html_span_text(same_line, " is the same as the ");
  app_code_lesson_expression_string_concat_value_word(same_line, on_light);
  html_span_text(same_line, " of ");
  app_code_string_colored(same_line, joined_value);
  let remember_line = html_div(derive);
  return {
    code_a,
    code_b,
    join_code,
    joined_value,
    color,
    on_light,
    derive,
    remember_line,
  };
}
