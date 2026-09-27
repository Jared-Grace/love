import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_style_normal } from "./app_code_style_normal.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { app_code_pointer_color_or_null } from "./app_code_pointer_color_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
export function app_code_output_pointed(pointers) {
  arguments_assert(arguments, 1);
  ("a painter for what a program wrote out, one line each, where a line a pointer names is drawn as a tile in that pointer's colour - so the 2 written out for the row wears the row's colour, as it does in the writing above");
  function paint(container, answer) {
    let answer_div = html_div(container);
    app_code_style_normal(answer_div);
    let lines = text_split_newline(answer);
    for (let line of lines) {
      let line_div = html_div(answer_div);
      let color = app_code_pointer_color_or_null(pointers, line);
      if (null_is(color)) {
        html_span_text(line_div, line);
      } else {
        app_code_span_text_highlight_color(line_div, line, color);
      }
    }
  }
  return paint;
}
