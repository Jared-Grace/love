import { html_span } from "./html_span.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_code_lesson_statement_title_code_note_paint_get(
  fragment,
  note,
) {
  arguments_assert(arguments, 2);
  ("what paints a piece of a home title's code with a note after it in parentheses, as (each logged)");
  ("The two lessons of a pair where a name takes new values teach the same line and differ only in what is written out. The human chose, 2026-09-27, to say that in a note after the code in both titles - (each logged) and (last logged) - with the same words before it, over words like last value only, which spoke of writing out in a title that said nothing else about it.");
  let bracketed = text_combine_multiple(["(", note, ")"]);
  function paint_code(parent) {
    fragment(parent);
    html_span_text(parent, " ");
    let kept = html_span(parent);
    html_style_white_space(kept, "nowrap");
    html_span_text(kept, bracketed);
  }
  return paint_code;
}
