import { html_jetbrains_mono } from "../../../love/public/src/html_jetbrains_mono.mjs";
import { html_font_set } from "../../../love/public/src/html_font_set.mjs";
export function html_font_jetbrains_mono(div) {
  html_jetbrains_mono();
  html_font_set(div, '"JetBrains Mono", monospace');
}
