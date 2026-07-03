import { html_font_jetbrains_mono } from "../../../love/public/src/html_font_jetbrains_mono.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function html_cycle_code(parent, parts) {
  let cycles = [noop, html_font_jetbrains_mono];
  html_cycle(parent, cycles, parts);
}
