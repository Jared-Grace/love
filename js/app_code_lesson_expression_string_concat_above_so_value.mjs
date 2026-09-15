import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_string_hello } from "./app_code_lesson_expression_string_hello.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_expression_string_concat_pair } from "./app_code_lesson_expression_string_concat_pair.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_lesson_expression_string_concat_above_remember_line } from "./app_code_lesson_expression_string_concat_above_remember_line.mjs";
import { property_get } from "./property_get.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_expression_string_concat_value_word } from "./app_code_lesson_expression_string_concat_value_word.mjs";
import { app_code_string_value_of_is_say } from "./app_code_string_value_of_is_say.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_string_concat_above_so_value(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  let two = app_code_lesson_expression_string_concat_pair();
  let a = list_get(two, 0);
  let r = app_code_lesson_expression_string_concat_above_remember_line(
    two,
    a,
    root,
  );
  let remember_line = property_get(r, "remember_line");
  let derive = property_get(r, "derive");
  let on_light = property_get(r, "on_light");
  let color = property_get(r, "color");
  let joined_value = property_get(r, "joined_value");
  let join_code = property_get(r, "join_code");
  let code_b = property_get(r, "code_b");
  let code_a = property_get(r, "code_a");
  let reminded = app_code_remember_from_lesson(
    remember_line,
    context,
    app_code_lesson_expression_string_hello,
    ["the "],
  );
  app_code_lesson_expression_string_concat_value_word(reminded, on_light);
  app_code_string_value_of_is_say(reminded, joined_value);
  let so_line = html_div(derive);
  html_span_text(so_line, "So the ");
  app_code_lesson_expression_string_concat_value_word(so_line, on_light);
  html_span_text(so_line, " of ");
  html_span_text_code_dark(so_line, join_code);
  html_span_text(so_line, " is ");
  let so_value = html_span_text_code_dark(so_line, joined_value);
  let r2 = {
    color,
    joined_value,
    code_b,
    code_a,
    so_value,
  };
  return r2;
}
