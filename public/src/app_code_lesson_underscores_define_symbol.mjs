import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_articled_split } from "../../../love/public/src/text_articled_split.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function app_code_lesson_underscores_define_symbol(
  c,
  symbol_name,
  symbol,
) {
  arguments_assert(arguments, 3);
  let row = html_div(c);
  let r = text_articled_split(symbol_name);
  let text = property_get(r, "text");
  let article = property_get(r, "article");
  let combined = text_combine_multiple([" This is ", article, " "]);
  const parts = [combined, text, ": ", symbol];
  let cycles = [noop, html_bold, noop, html_style_code_dark];
  html_cycle(row, cycles, parts);
}
