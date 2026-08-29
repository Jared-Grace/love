import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
export function app_code_lesson_expression_min_max_generic_title_name_id(
  noun_upper,
  called_name,
) {
  arguments_assert(arguments, 2);
  ("the home title: {noun_upper} of two {fn}");
  ("The lower-case noun used to be taken as well and joined into a phrase nothing then read. The title is painted from the capitalised word, so the lower-case one was never wanted here - it is the caller that writes the labels out of it.");
  function paint(parent) {
    let heading = text_combine(noun_upper, " of two ");
    html_span_text(parent, heading);
    html_span_text_code_dark(parent, called_name);
  }
  let built = app_code_lesson_name_id_category_then("functions", paint);
  return built;
}
