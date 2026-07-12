import { html_cycle } from "./html_cycle.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_code_bold(parent, parts) {
  let cycles = [noop, html_style_code_dark, noop, html_bold];
  html_cycle(parent, cycles, parts);
}
