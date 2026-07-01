import { html_visibility_visible_multiple } from "../../../love/public/src/html_visibility_visible_multiple.mjs";
import { html_visibility_hidden_multiple } from "../../../love/public/src/html_visibility_hidden_multiple.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_replace_success_message } from "../../../love/public/src/app_replace_success_message.mjs";
import { app_g_button_wrong_generic } from "../../../love/public/src/app_g_button_wrong_generic.mjs";
import { list_sort_text_to } from "../../../love/public/src/list_sort_text_to.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_take } from "../../../love/public/src/list_take.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_code_container_light } from "../../../love/public/src/app_code_container_light.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
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
export function app_code_lesson_symbols_digits() {
  const answer_count_max = 4;
  let r3 = {
    id: "symbols_digits",
    name: "Symbols (Digits)",
    above: function digits_above(root) {
      let c = app_code_container_light_blue(root);
      html_style_assign(c, {
        display: "flex",
        flexDirection: "column",
        gap: "0.8em",
      });
      let p3 = html_div(c);
      let ds = digits();
      let joined = list_join_comma_space(ds);
      let combined2 = text_combine_multiple([
        "The numbers ",
        joined,
        " are called ",
      ]);
      html_cycle_bold(p3, [combined2, "digits"]);
      let p2 = html_div(c);
      html_cycle_bold(p2, [
        "In a number, the digits (0, 1, 2, ..., 9) are examples of ",
        "symbols",
      ]);
      let p = html_div_text(
        c,
        "When we write computer programs, we use symbols, including numbers",
      );
    },
    batch: function digit_batch() {
      let digit_counts = range_1(5);
      function lambda(digit_count) {
        let digits = integer_positive_random_digits_text(digit_count);
        let r2 = {
          example: function lambda6(parent) {
            let a = example_above(parent, digits);
            let container_answer2 = property_get(a, "container_answer");
            html_text_set(container_answer2, "Number of symbols: ");
            let div3 = app_code_container_dark(container_answer2);
            let s = app_code_symbol_generic(
              div3,
              digit_count,
              "transparent",
              "transparent",
            );
          },
          answer: digit_count,
          quizzes: [
            function on_quiz(context, parent, refresh) {
              let container = app_code_container_light_blue(parent);
              let a = example_above(container, digits);
              let container_answer2 = property_get(a, "container_answer");
              html_text_set(container_answer2, "How many symbols are there? ");
              let b = digit_batch();
              let answers = list_map_property(b, "answer");
              list_remove_if_exists(answers, digit_count);
              let taken = list_take(answers, answer_count_max - 1);
              let concated = list_concat(taken, [digit_count]);
              list_sort_text_to(concated);
              let on_success = html_div(parent);
              let success = app_replace_success_message(on_success);
              let r4 = app_code_next(
                context,
                on_success,
                "take another quiz to practice some more",
                "please give me another quiz to take",
                refresh,
              );
              let container_on_success = property_get(r4, "container");
              let hides = [success, container_on_success];
              html_visibility_hidden_multiple(hides);
              let buttons = list_map(concated, lambda3);
              function lambda3(answer) {
                let b2 = app_replace_button_wide(
                  container_answer2,
                  answer,
                  on_click,
                );
                async function on_click() {
                  let eq2 = equal(answer, digit_count);
                  if (eq2) {
                    app_shared_button_screen_green_style_assign(b2);
                    html_visibility_visible_multiple(hides);
                  } else {
                    const transparency_alpha_channel_hex = "44";
                    app_g_button_wrong_generic(
                      b2,
                      transparency_alpha_channel_hex,
                    );
                  }
                }
                return b2;
              }
            },
          ],
        };
        return r2;
      }
      let mapped2 = list_map(digit_counts, lambda);
      return mapped2;
    },
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
    let container_answer = app_code_container_light(parent);
    let r = {
      container_answer,
    };
    return r;
  }
}
