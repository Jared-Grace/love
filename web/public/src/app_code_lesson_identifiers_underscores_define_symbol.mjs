import { text_articled_split } from "../../../love/public/src/text_articled_split.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_lesson_identifiers_underscores_define_symbol(
  c,
  separator_valid_name,
  separator_valid,
  text_after,
) {
  let div3 = html_div(c);
  let r = text_articled_split(separator_valid_name);
  let second = property_get(r, "second");
  let first = property_get(r, "first");
  let cycles = [noop, html_bold, noop, html_style_code_dark];
  html_cycle(div3, cycles, [
    " This is " + first + " ",
    second,
    ": ",
    separator_valid,
  ]);
  let combined = text_combine(" ", text_after);
  let div = html_div_text(c, combined);
}
