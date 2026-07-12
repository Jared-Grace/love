import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { html_cycle } from "./html_cycle.mjs";
import { noop } from "./noop.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text_smaller } from "./html_span_text_smaller.mjs";
import { html_display_set } from "./html_display_set.mjs";
import { html_flex_column_center } from "./html_flex_column_center.mjs";
import { incrementer } from "./incrementer.mjs";
import { list_squash } from "./list_squash.mjs";
import { list_between_comma_space } from "./list_between_comma_space.mjs";
export function html_text_characters_numbered(parent, text) {
  let betweened = list_between_comma_space(text);
  let squashed = list_squash(betweened);
  let i = incrementer();
  let cycles = [
    function lambda(span) {
      html_font_jetbrains_mono(span);
      html_flex_column_center(span);
      html_display_set(span, "inline-flex");
      let text = i();
      let s = html_span_text_smaller(span, text);
      html_font_color_set(s, "rgb(0, 110, 221)");
    },
    noop,
  ];
  html_cycle(parent, cycles, squashed);
}
