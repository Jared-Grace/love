import { list_size_2_assert } from "../../../love/public/src/list_size_2_assert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_first_second } from "../../../love/public/src/list_first_second.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { text_articled } from "../../../love/public/src/text_articled.mjs";
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
  let cycles = [noop, html_bold, noop, html_style_code_dark];
  let combined = text_combine(" ", text_after);
  let articled = text_articled(separator_valid_name);
  let split = text_split_space(s);
  let r = list_first_second_only(split);
  let second = property_get(r, "second");
  let first = property_get(r, "first");
  html_cycle(div3, cycles, [
    " This is ",
    articled,
    ": ",
    separator_valid,
    combined,
  ]);
}
function list_first_second_only(split) {
  list_size_2_assert(split);
  let r = list_first_second(split);
  return r;
}

