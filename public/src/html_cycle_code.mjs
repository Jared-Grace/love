import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function html_cycle_code(parent, parts) {
  let cycles = [noop, html_style_code_dark];
  html_cycle(parent, cycles, parts);
}
