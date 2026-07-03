import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_code_lesson_identifiers_underscores_define_symbol(
  c,
  separator_valid_name,
  separator_valid,
) {
  let div3 = html_div(c);
  let cycles = [
    noop,
    html_bold,
    html_font_jetbrains_mono,
    html_style_code_dark,
  ];
  html_cycle(div3, cycles, [
    " This is an ",
    separator_valid_name,
    ": ",
    separator_valid,
    " (The line is near the bottom)",
  ]);
}
