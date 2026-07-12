import { html_cycle } from "./html_cycle.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_bold } from "./html_bold.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_bold_code(row, parts) {
  let cycles = [noop, html_bold, noop, html_style_code_dark];
  html_cycle(row, cycles, parts);
}
