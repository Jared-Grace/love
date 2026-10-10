import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_empty } from "./text_empty.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { integer_is_assert } from "./integer_is_assert.mjs";
import { equal } from "./equal.mjs";
import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_span_text_code_highlight } from "./app_code_span_text_code_highlight.mjs";
export function app_code_code_dark_lines_brace_marked(component, text) {
  "code standing on more than one line, written into a code chip with the one brace the text points at drawn on the highlight colour";
  "The count of arguments is deliberately not asserted, because this stands in the slot a lesson paints its code with, and that slot is called with three arguments by the worked example and with two by the quiz - the same reason the plain multi-line writer has never asserted either.";
  "The brace is drawn on the colour a pointed-at piece of code always wears, so it reads as the one to look at; the signs that mark it in the text are not drawn at all.";
  "The chip is emptied first, because what goes in is a run of pieces, and a chip drawn twice would otherwise keep the first drawing underneath the second.";
  html_style_code_dark(component);
  html_style_white_space(component, "pre-wrap");
  html_text_align_left(component);
  let nothing = text_empty();
  html_text_set(component, nothing);
  let unmarked = app_code_brace_unmarked(text);
  let code = property_get(unmarked, "code");
  let index = property_get(unmarked, "index");
  integer_is_assert(index);
  if (equal(index, -1)) {
    html_text_code_breakable_add(component, code, html_span_text);
    return;
  }
  let before = code.slice(0, index);
  let brace = code[index];
  let after = code.slice(index + 1);
  html_text_code_breakable_add(component, before, html_span_text);
  app_code_span_text_code_highlight(component, brace);
  html_text_code_breakable_add(component, after, html_span_text);
}
