import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_lesson_expression_string_concat_value_word(
  host,
  on_light,
) {
  arguments_assert(arguments, 2);
  ("the word value, coloured for the light container background, so the word points at the blue value it names");
  let word = html_span_text(host, "value");
  html_font_color_set(word, on_light);
}
