import { app_code_lesson_name_id_operators } from "./app_code_lesson_name_id_operators.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_repeated_generic_title_name_id(
  title_word,
  symbol,
  right_word,
) {
  arguments_assert(arguments, 3);
  ("the home title names the operator in words and then shows it");
  function paint(parent) {
    html_span_text(parent, title_word);
    html_span_text_code_dark(parent, symbol);
  }
  let built = app_code_lesson_name_id_operators(right_word, paint);
  return built;
}
