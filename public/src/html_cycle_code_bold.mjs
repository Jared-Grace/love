import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { html_style_code_dark } from "../../../love/public/src/html_style_code_dark.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function html_cycle_code_bold(parent, parts) {
  let cycles = [noop, html_style_code_dark, noop, html_bold];
  html_cycle(parent, cycles, parts);
}
