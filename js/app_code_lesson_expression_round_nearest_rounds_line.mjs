import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_round_nearest_rounds_line(
  fraction_text,
  middle_text,
  result_text,
  rule,
  whole_text,
) {
  arguments_assert(arguments, 5);
  ("a plain tight decimal number, then the rounds-to prose, then the whole-number result as a code tile");
  let line = html_div(rule);
  let number = text_combine_multiple([whole_text, ".", fraction_text]);
  html_span_text_code_dark(line, number);
  html_span_text(line, middle_text);
  html_span_text_code_dark(line, result_text);
}
