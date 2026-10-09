import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_style_max_width } from "./html_style_max_width.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
export function html_style_code_nowrap_generic(span, style_code) {
  arguments_assert(arguments, 2);
  ("a piece of code standing in a run of words, styled however it was asked to be, and kept on one line");
  ("Code broken across two lines inside a sentence reads as two pieces of code, so the not-breaking is said once here and each colour is left saying only its colour.");
  ("It is a block standing in the line rather than a run of letters, so it is never split between the end of one line and the start of the next: a piece that does not fit where it stands moves down whole.");
  ('A piece wider than the whole line is the one exception. Kept on one line it would push the page wider than the phone and make the reader scroll sideways, as else { console.log("kindness"); } did at 360 wide on 2026-10-09; capped at the line\'s width it wraps inside its own dark box instead, which still reads as one piece.');
  html_display_inline_block(span);
  html_style_max_width(span, "100%");
  html_style_white_space(span, "normal");
  style_code(span);
}
