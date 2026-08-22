import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function html_div_paragraph_small(parent) {
  "A line of small explaining writing set beneath a heading - clear of what it follows, smaller than it, and spaced out enough inside itself to read as sentences. It is made empty, for the caller to colour and to set words on.";
  "THE THREE SETTINGS ARE ONE DECISION AND WERE WRITTEN OUT AS THREE. Small text at single spacing is what a paragraph looks like when nobody thought about it, and a sentence sat hard against the heading above it reads as part of the heading. Each one alone is a small ugliness that nobody files, and together they are the difference between a page that was designed and a page that was assembled.";
  "IT COLOURS NOTHING, because the pages that use it are quiet in different ways - one asks the shared grey, one asks the hymn's own. Putting a colour here would make every caller either accept that one or set it twice.";
  arguments_assert(arguments, 1);
  let line = html_div(parent);
  html_style_margin_top(line, "8px");
  html_style_font_size(line, "14px");
  html_style_line_height(line, "1.5");
  return line;
}
