import { text_decimal_combine } from "./text_decimal_combine.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_expression_round_nearest_rounds_line(
  fraction_text,
  middle_text,
  result_text,
  rule,
  whole_text,
  lead,
) {
  arguments_assert(arguments, 6);
  ("a plain tight decimal number, then the rounds-to prose, then the whole-number result as a code tile");
  ("The opener is the caller's, because this line follows a worked example rather than standing on its own: it is the same rule reaching a second number, and the caller is the one that knows what came before it.");
  let line = html_div(rule);
  html_span_text(line, lead);
  let number = text_decimal_combine(whole_text, fraction_text);
  html_span_text_code_dark(line, number);
  html_span_text(line, middle_text);
  html_span_text_code_dark(line, result_text);
  return line;
}
