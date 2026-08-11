import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_expression_round_nearest_title_name_id() {
  arguments_assert(arguments, 0);
  ("the home title is console.log round to nearest");
  function paint(parent) {
    html_span_text(parent, "Round to nearest ");
    html_span_text_code_dark(parent, "Math.round");
  }
  let rights = ["round to nearest"];
  let built = app_code_lesson_name_id_category_then(rights, "functions", paint);
  return built;
}
