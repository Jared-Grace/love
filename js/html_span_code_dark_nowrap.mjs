import { arguments_assert } from "./arguments_assert.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
export function html_span_code_dark_nowrap(parent) {
  arguments_assert(arguments, 1);
  ("one continuous black code tile that never breaks across lines, so a whole expression reads as a single unit instead of being chopped into separate pieces at the edge of the screen");
  ("The twin of the plain dark tile next door, and written beside it for the same reason it exists: the tile and the promise not to wrap are one decision, and a caller that has to remember the second line forgets it. Two lessons wrote the pair by hand and one of them wrote it differently.");
  let span = html_span(parent);
  html_style_code_dark_nowrap(span);
  return span;
}
