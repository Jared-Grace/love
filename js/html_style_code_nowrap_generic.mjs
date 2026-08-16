import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_display_inline } from "./html_display_inline.mjs";
export function html_style_code_nowrap_generic(span, style_code) {
  arguments_assert(arguments, 2);
  ("a piece of code standing in a run of words, styled however it was asked to be, and kept on one line");
  ("Code broken across two lines inside a sentence reads as two pieces of code, so the not-breaking is said once here and each colour is left saying only its colour.");
  html_display_inline(span);
  html_style_white_space(span, "nowrap");
  style_code(span);
}
