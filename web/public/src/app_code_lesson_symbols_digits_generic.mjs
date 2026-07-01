import { newFunction } from "../../../love/public/src/newFunction.mjs";
import { html_flex_column_center } from "../../../love/public/src/html_flex_column_center.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { list_property_next_value } from "../../../love/public/src/list_property_next_value.mjs";
import { list_map_index_1 } from "../../../love/public/src/list_map_index_1.mjs";
import { app_code_symbol } from "../../../love/public/src/app_code_symbol.mjs";
import { app_code_container_light } from "../../../love/public/src/app_code_container_light.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
import { app_code_container_dark } from "../../../love/public/src/app_code_container_dark.mjs";
import { app_g_button_wrong_generic } from "../../../love/public/src/app_g_button_wrong_generic.mjs";
import { html_visibility_visible_multiple } from "../../../love/public/src/html_visibility_visible_multiple.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_visibility_hidden_multiple } from "../../../love/public/src/html_visibility_hidden_multiple.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_code_home } from "../../../love/public/src/app_code_home.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { storage_local_set_context } from "../../../love/public/src/storage_local_set_context.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_replace_success_message } from "../../../love/public/src/app_replace_success_message.mjs";
import { list_sort_text_to } from "../../../love/public/src/list_sort_text_to.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { integer_positive_random_digits_text } from "../../../love/public/src/integer_positive_random_digits_text.mjs";
import { range_1 } from "../../../love/public/src/range_1.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { digits } from "../../../love/public/src/digits.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_symbols_digits_generic(
  name,
  id,
  above,
  on_symbol,
) {
  let r3 = {
    name,
    id,
    above,
    batch: function batch_get() {
      let digit_counts = range_1(5);
      async function lambda(digit_count) {
        let digits = integer_positive_random_digits_text(digit_count);
        let r5 = await newFunction(
          example_above,
          digits,
          batch_get,
          digit_count,
        );
        return r5;
      }
      let mapped2 = list_map(digit_counts, lambda);
      return mapped2;
    },
  };
  return r3;
  function example_above(parent, digits) {
    let container_above = html_div(parent);
    let q = app_code_container_light(parent);
    let span = html_div_text(q, "Symbols: ");
    let row = app_code_container_dark(q);
    html_style_assign(row, {
      display: "flex",
    });
    function lambda4(d, index_1) {
      let row_item = html_div(row);
      html_flex_column_center(row_item);
      let digit = app_code_symbol(row_item, d);
      on_symbol(row_item, index_1);
      return digit;
    }
    let spans = list_map_index_1(digits, lambda4);
    let container_answer = app_code_container_light(parent);
    let r = {
      container_answer,
      container_above,
    };
    return r;
  }
  function newFunction(example_above, digits, batch_get, digit_count) {
    const answer_count_max = 4;
    const quizzes = [
      function on_quiz1(context, parent, refresh) {
        let container = app_code_container_light_blue(parent);
        let a = example_above(container, digits);
        let container_above = property_get(a, "container_above");
        html_text_set(
          container_above,
          "Please answer the following quiz question:",
        );
        let container_answer2 = property_get(a, "container_answer");
        html_text_set(container_answer2, "How many symbols are there? ");
        let b = batch_get();
        let answers = list_map_property(b, "answer");
        list_remove_if_exists(answers, digit_count);
        let taken = list_shuffle_take(answers, answer_count_max - 1);
        let concated = list_concat(taken, [digit_count]);
        list_sort_text_to(concated);
        let on_success = html_div(parent);
        let success = app_replace_success_message(on_success);
        async function lambda5() {
          let size = list_size(quizzes);
          let index = list_index_of(quizzes, on_quiz1);
          let a1 = add_1(index);
          let index_new = mod(a1, size);
          storage_local_set_context(context, "quiz_index", index_new);
          let li = list_index_last_is(quizzes, index);
          if (li) {
            function lambda7(value) {
              let lessons = app_code_lessons();
              let value_next = list_property_next_value(lessons, "id", value);
              return value_next;
            }
            let value_initial = app_code_lesson_first_id();
            storage_local_transform_context(
              context,
              "lesson_id",
              value_initial,
              lambda7,
            );
            await app_shared_screen_set(context, app_code_home);
          } else {
            refresh();
          }
        }
        let r4 = app_code_next(
          context,
          on_success,
          "take another quiz to practice some more",
          "please give me another quiz to take",
          refresh,
          lambda5,
        );
        let container_on_success = property_get(r4, "container");
        let hides = [success, container_on_success];
        html_visibility_hidden_multiple(hides);
        let buttons = list_map(concated, lambda3);
        function lambda3(answer) {
          let b2 = app_replace_button_wide(container_answer2, answer, on_click);
          async function on_click() {
            let eq2 = equal(answer, digit_count);
            if (eq2) {
              app_shared_button_screen_green_style_assign(b2);
              html_visibility_visible_multiple(hides);
            } else {
              const transparency_alpha_channel_hex = "44";
              app_g_button_wrong_generic(b2, transparency_alpha_channel_hex);
            }
          }
          return b2;
        }
      },
    ];
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
      quizzes,
    };
    return r2;
  }
}
