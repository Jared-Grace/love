import { list_size_less_1 } from "../../../love/public/src/list_size_less_1.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_cycle_mono } from "../../../love/public/src/html_cycle_mono.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_lesson_symbols_digits_generic } from "../../../love/public/src/app_code_lesson_symbols_digits_generic.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
export function app_code_lesson_symbols_digits_numbered() {
  let r5 = app_code_lesson_symbols_digits_generic(
    "Symbols (Digits, numbered)",
    "symbols_digits_numbered",
    above,
    on_symbol,
  );
  return r5;
  function above(root) {
    let c = app_code_container_light_blue(root);
    html_style_assign(c, {
      display: "flex",
      flexDirection: "column",
      gap: "0.8em",
    });
    let p3 = html_div(c);
    let ds = digits();
    let sz1 = list_size_less_1(ds);
    let taken = list_take(ds, sz1);
    function lambda(item) {
      taken;
    }
    each(list, lambda);
    let joined = list_join_comma_space(ds);
    let combined2 = text_combine_multiple([
      "The numbers ",
      joined,
      " are called ",
    ]);
    html_cycle_mono(p3, [combined2, "digits"]);
    let p2 = html_div(c);
    html_cycle_bold(p2, [
      "In a number, the digits (0, 1, 2, ..., 9) are examples of ",
      "symbols",
    ]);
    let p = html_div_text(
      c,
      "When we write computer programs, we use symbols, including numbers",
    );
  }
  function on_symbol(parent, index_1) {
    let div4 = html_span_text(parent, index_1);
    html_style_font_size(div4, "0.75em");
    html_font_color_set(div4, "#bbb");
  }
}
