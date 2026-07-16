import { html_jetbrains_mono_include } from "./html_jetbrains_mono_include.mjs";
import { html_font_set } from "./html_font_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_font_jetbrains_mono(component) {
  html_jetbrains_mono_include();
  html_font_set(component, '"JetBrains Mono", monospace');
  "no ligatures: learners must see the literal characters (e.g. !== not a single ≠ glyph, === not a triple-bar)";
  html_style_set(component, "font-variant-ligatures", "none");
}
