import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_code_unfonted } from "./html_style_code_unfonted.mjs";
export function app_code_span_text_tile_color(parent, text, background) {
  arguments_assert(arguments, 3);
  ("a line a program wrote out, given the coloured tile a piece of code gets, in a colour handed in, so the 2 written out for the row wears the row's colour. Written out is code's output and not English, so it keeps a background, where an English word gets coloured letters only - the human's rule, 2026-10-01: a filled background is kept for code. Same background, rounding and padding as a code chip, in the reading font");
  let span = html_span(parent);
  html_text_set(span, text);
  let font = "white";
  html_style_code_unfonted(span, background, font);
  return span;
}
