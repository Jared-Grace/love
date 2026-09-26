import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_title_remainder_percent_paint(parent, percent) {
  arguments_assert(arguments, 2);
  ("the start every remainder lesson's title shares - Remainder (%) - with the operator in parentheses the way the home group names it, at the human's request");
  html_span_text(parent, "Remainder (");
  html_span_text_code_dark(parent, percent);
  html_span_text(parent, ")");
}
