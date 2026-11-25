import { list_between_comma_space } from "./list_between_comma_space.mjs";
import { list_squash } from "./list_squash.mjs";
import { incrementer } from "./incrementer.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { html_flex_column_center } from "./html_flex_column_center.mjs";
import { html_display_set } from "./html_display_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_span_text_smaller } from "./html_span_text_smaller.mjs";
import { app_shared_color_character_number } from "./app_shared_color_character_number.mjs";
import { noop } from "./noop.mjs";
import { html_cycle } from "./html_cycle.mjs";
export function html_text_characters_numbered_color(parent, text, color) {
  "each character with its number under it, the characters in the colour given and the commas between them left alone, asked by the human 2026-11-24 when coloured commas read as part of the alphabet";
  let betweened = list_between_comma_space(text);
  let squashed = list_squash(betweened);
  let i = incrementer();
  let cycles = [
    function lambda(span) {
      html_font_jetbrains_mono(span);
      html_flex_column_center(span);
      html_display_set(span, "inline-flex");
      html_font_color_set(span, color);
      let words = i();
      let s = html_span_text_smaller(span, words);
      let color2 = app_shared_color_character_number();
      html_font_color_set(s, color2);
    },
    noop,
  ];
  html_cycle(parent, cycles, squashed);
}
