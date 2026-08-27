import { app_shared_font_size_label } from "./app_shared_font_size_label.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_line_height } from "./html_style_line_height.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
export function html_div_paragraph_small(parent) {
  "A line of small explaining writing set beneath a heading - clear of what it follows, smaller than it, and spaced out enough inside itself to read as sentences. It is made empty, for the caller to colour and to set words on.";
  "THE THREE SETTINGS ARE ONE DECISION AND WERE WRITTEN OUT AS THREE. Small text at single spacing is what a paragraph looks like when nobody thought about it, and a sentence sat hard against the heading above it reads as part of the heading. Each one alone is a small ugliness that nobody files, and together they are the difference between a page that was designed and a page that was assembled.";
  "IT COLOURS NOTHING, because the pages that use it are quiet in different ways - one asks the shared grey, one asks the hymn's own. Putting a colour here would make every caller either accept that one or set it twice.";
  "THE SIZE IS A SHARE OF WHAT IT SITS IN and not a count of pixels. Written as fourteen it read as fourteen on a page opening at sixteen and as fourteen again on one opening at twenty, so the same helper made one page's explaining line a shade smaller than its text and another's half the size of it - and a reader who grows the writing grows everything except this.";
  arguments_assert(arguments, 1);
  let line = html_div(parent);
  html_style_margin_top(line, "8px");
  let smaller = app_shared_font_size_label();
  html_style_font_size(line, smaller);
  html_style_line_height(line, "1.5");
  return line;
}
