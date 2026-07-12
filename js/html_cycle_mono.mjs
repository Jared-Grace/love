import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { html_cycle } from "./html_cycle.mjs";
import { noop } from "./noop.mjs";
export function html_cycle_mono(parent, parts) {
  let cycles = [noop, html_font_jetbrains_mono];
  html_cycle(parent, cycles, parts);
}
