import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_code_container_light } from "../../../love/public/src/app_code_container_light.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_map_index_1 } from "../../../love/public/src/list_map_index_1.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_style_font_size } from "../../../love/public/src/html_style_font_size.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_code_container_dark } from "../../../love/public/src/app_code_container_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { html_cycle_bold } from "../../../love/public/src/html_cycle_bold.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_join_comma_space } from "../../../love/public/src/list_join_comma_space.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
export function app_code_lesson_symbols_digits() {
  let r3 = {
    id: "symbols_digits",
    name: "Symbols (Digits)",
    above: function digits_above(root) {
      let p3 = html_p(root);
      let ds = digits();
      let joined = list_join_comma_space(ds);
      let combined2 = text_combine_multiple([
        "The numbers ",
        joined,
        " are called ",
      ]);
      html_cycle_bold(p3, [combined2, "digits"]);
      let p2 = html_p(root);
      html_cycle_bold(p2, [
        "In a number, the digits (0, 1, 2, ..., 9) are examples of ",
        "symbols",
      ]);
    },
    batch: function digit_batch() {
      let digit_counts = range_1(5);
      function lambda(digit_count) {
        let digits = integer_positive_random_digits_text(digit_count);
        let r2 = {
          example: function lambda6(parent) {
            let a = example_above(parent, digits);
            let div3 = app_code_container_dark(a);
            let s = app_code_symbol_generic(
              div3,
              digit_count,
              "transparent",
              "transparent",
            );
          },
          answer: digit_count,
          quizzes: [
            function lambda2(parent) {
              let a = example_above(parent, digits);
              let b = digit_batch();
              let mapped = list_map_property(list, property_name);
            },
          ],
        };
        return r2;
      }
      let mapped2 = list_map(digit_counts, lambda);
      return mapped2;
    },
    quizzes: [function lambda5(parent) {}],
  };
  return r3;
  function example_above(parent, digits) {
    let q = app_code_container_light(parent);
    let span = html_div_text(q, "Symbols: ");
    let row = app_code_container_dark(q);
    html_style_assign(row, {
      display: "flex",
    });
    function lambda4(d, index_1) {
      let row_item = html_div(row);
      html_style_assign(row_item, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      });
      let digit = app_code_symbol(row_item, d);
      let div4 = html_span_text(row_item, index_1);
      html_style_font_size(div4, "0.75em");
      html_font_color_set(div4, "#bbb");
      return digit;
    }
    let spans = list_map_index_1(digits, lambda4);
    let a = app_code_container_light(parent);
    html_text_set(a, "Number of symbols: ");
    return a;
  }
}
