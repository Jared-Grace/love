import { app_code_lesson_symbols_batch_digits } from "../../../love/public/src/app_code_lesson_symbols_batch_digits.mjs";
import { html_span_text_smaller } from "../../../love/public/src/html_span_text_smaller.mjs";
import { html_cycle_mono_list_between_comma_space_before_after } from "../../../love/public/src/html_cycle_mono_list_between_comma_space_before_after.mjs";
import { html_span_text_bold } from "../../../love/public/src/html_span_text_bold.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
export function app_code_lesson_symbols_digits_numbered() {
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Digits, numbered)",
    "symbols_digits_numbered",
    above,
    on_symbol,
    app_code_lesson_symbols_batch_digits,
  );
  return r5;
  function above(root) {
    let c = app_code_container_light_blue(root);
    let p3 = html_div(c);
    let ds = digits();
    html_cycle_mono_list_between_comma_space_before_after(
      p3,
      "The numbers ",
      ds,
      " are called ",
    );
    html_span_text_bold(p3, "digits");
    let p2 = html_div(c);
    html_cycle_mono_list_between_comma_space_before_after(
      p2,
      "In a number, its digits (",
      [0, 1, 2],
      [", ..., ", 9, ") are examples of "],
    );
    html_span_text_bold(p2, "symbols");
    let p = html_div_text(
      c,
      "When we write computer programs, we use symbols, including numbers",
    );
  }
  function on_symbol(parent, index_1) {
    let div4 = html_span_text_smaller(parent, index_1);
    html_font_color_set(div4, "#bbb");
  }
}
