import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_span_text_smaller } from "../../../love/public/src/html_span_text_smaller.mjs";
import { html_display_set } from "../../../love/public/src/html_display_set.mjs";
import { html_flex_column_center } from "../../../love/public/src/html_flex_column_center.mjs";
import { incrementer } from "../../../love/public/src/incrementer.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_between_comma_space } from "../../../love/public/src/list_between_comma_space.mjs";
export function html_text_characters_numbered(alphabet_lower, div2) {
  let betweened = list_between_comma_space(alphabet_lower);
  let squashed = list_squash(betweened);
  let i = incrementer();
  let cycles = [
    function lambda2(span) {
      html_flex_column_center(span);
      html_display_set(span, "inline-flex");
      let text = i();
      let s = html_span_text_smaller(span, text);
      html_font_color_set(s, "rgb(0, 110, 221)");
    },
    noop,
  ];
  html_cycle(div2, cycles, squashed);
}
