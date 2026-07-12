import { html_cycle_bold_code } from "./html_cycle_bold_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_articled_split } from "./text_articled_split.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
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
  html_cycle_bold_code(row, [combined, text, ": ", symbol]);
}
