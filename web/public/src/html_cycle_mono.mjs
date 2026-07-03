import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
export function html_cycle_mono(parent, parts) {
  let cycles = [noop, html_style_code_dark];
  html_cycle(parent, cycles, parts);
}
