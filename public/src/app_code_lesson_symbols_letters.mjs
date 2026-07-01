import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { list_squash } from "../../../love/public/src/list_squash.mjs";
import { list_between_comma_space } from "../../../love/public/src/list_between_comma_space.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_display_set } from "../../../love/public/src/html_display_set.mjs";
import { incrementer } from "../../../love/public/src/incrementer.mjs";
import { html_span_text_smaller } from "../../../love/public/src/html_span_text_smaller.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { html_flex_column_center } from "../../../love/public/src/html_flex_column_center.mjs";
import { list_alphabet_lower } from "../../../love/public/src/list_alphabet_lower.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
export function app_code_lesson_symbols_letters() {
  function lambda(root) {
    let c = app_code_container_light_blue(root);
    let div = html_div(c);
    let span2 = html_span_text(
      div,
      "In English, there are 26 letters of the alphabet: ",
    );
    let div2 = html_div(c);
    let alphabet_lower = list_alphabet_lower();
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
    let div3 = html_div(parent);
    html_cycle_bold(div3, [
      "Those 26 letters are written in ",
      "lowercase",
      ". Below are letters written in ",
      "uppercase",
      ":",
    ]);
  }
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Letters)",
    "symbols_letters",
    lambda,
    noop,
  );
  return r5;
}
