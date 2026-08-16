import { app_code_style_normal_span } from "./app_code_style_normal_span.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_writes_out_line(parent, value) {
  arguments_assert(arguments, 2);
  ("the line under a piece of code that says what it writes out, with the value itself wearing the look the worked example gives its answer");
  ("Every lesson that shows a program and then says what comes out of it says it this way, in these words and in this shape. Two lessons wording it differently would be asking a learner to notice a difference that is not there.");
  let d = html_div(parent);
  html_span_text(d, "This writes out: ");
  let span = app_code_style_normal_span(d, value);
  return span;
}
