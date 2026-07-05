import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
import { app_code_quiz_index_reset } from "../../../love/public/src/app_code_quiz_index_reset.mjs";
import { app_code_quiz_index_set } from "../../../love/public/src/app_code_quiz_index_set.mjs";
import { app_code_examples } from "../../../love/public/src/app_code_examples.mjs";
import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { app_g_button_wrong_generic } from "../../../love/public/src/app_g_button_wrong_generic.mjs";
import { html_visibility_visible_multiple } from "../../../love/public/src/html_visibility_visible_multiple.mjs";
import { app_shared_button_screen_green_style_assign } from "../../../love/public/src/app_shared_button_screen_green_style_assign.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { html_visibility_hidden_multiple } from "../../../love/public/src/html_visibility_hidden_multiple.mjs";
import { app_code_next } from "../../../love/public/src/app_code_next.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { storage_local_transform_context } from "../../../love/public/src/storage_local_transform_context.mjs";
import { app_code_lesson_first_id } from "../../../love/public/src/app_code_lesson_first_id.mjs";
import { list_property_next_value } from "../../../love/public/src/list_property_next_value.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { list_index_last_is } from "../../../love/public/src/list_index_last_is.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { add_1 } from "../../../love/public/src/add_1.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { app_replace_success_message } from "../../../love/public/src/app_replace_success_message.mjs";
import { list_sort_text_to } from "../../../love/public/src/list_sort_text_to.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { list_remove_if_exists } from "../../../love/public/src/list_remove_if_exists.mjs";
import { list_unique } from "../../../love/public/src/list_unique.mjs";
import { app_code_answer_count_max } from "../../../love/public/src/app_code_answer_count_max.mjs";
import { app_code_symbol_generic } from "../../../love/public/src/app_code_symbol_generic.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_flex_column_stretch } from "../../../love/public/src/html_flex_column_stretch.mjs";
import { list_map_index_1 } from "../../../love/public/src/list_map_index_1.mjs";
import { html_flex_column_center } from "../../../love/public/src/html_flex_column_center.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { app_code_container_dark } from "../../../love/public/src/app_code_container_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_light } from "../../../love/public/src/app_code_container_light.mjs";
export function app_code_lesson_symbols_batches_generic(
  name,
  id,
  above,
  on_symbol,
  batch_get,
  example_label,
  quiz_label,
  symbols_to_answer,
  example_count,
  symbol_create,
  question_label,
) {
  id = text_replace_space_underscore(id);
  function example_above(parent, symbols) {
    let container = app_code_container_light(parent);
    let span = html_div_text(container, question_label);
    let row = app_code_container_dark(container);
    html_style_assign(row, {
      display: "flex",
      "flex-wrap": "wrap",
    });
    app_code_example_answer_gap(parent);
    function lambda4(d, index_1) {
      let row_item = html_div(row);
      html_flex_column_center(row_item);
      let digit = symbol_create(row_item, d);
      on_symbol(row_item, index_1, symbols);
      return digit;
    }
    let spans = list_map_index_1(symbols, lambda4);
    let r4 = {
      container,
    };
    return r4;
  }
  let lesson = {
    name,
    id,
    above,
    example_count,
    batch: function batch() {
      let b = batch_get();
      function lambda2(question) {
        let answer = symbols_to_answer(question);
        let symbols = text_split_empty(question);
        function example(parent) {
          html_flex_column_stretch(parent);
          app_code_flex_gap(parent);
          let a = example_above(parent, symbols);
          let container = property_get(a, "container");
          app_code_example_answer_label(container, example_label);
          let div3 = app_code_container_dark(container);
          let s = app_code_symbol_generic(
            div3,
            answer,
            "transparent",
            "transparent",
          );
        }
        const answer_count_max = app_code_answer_count_max();
        const quizzes = [
          function on_quiz1(context, parent, container, refresh) {
            let a = example_above(container, symbols);
            let a_container = property_get(a, "container");
            app_code_example_answer_label(a_container, quiz_label);
            let bq = batch_get();
            let answers = list_map(bq, symbols_to_answer);
            let answers_unique = list_unique(answers);
            list_remove_if_exists(answers_unique, answer);
            let taken = list_shuffle_take(answers_unique, answer_count_max - 1);
            let concated = list_concat(taken, [answer]);
            list_sort_text_to(concated);
            let on_success = html_div(parent);
            let success = app_replace_success_message(on_success);
            async function lambda5() {
              let size = list_size(quizzes);
              let index = list_index_of(quizzes, on_quiz1);
              let a1 = add_1(index);
              let index_new = mod(a1, size);
              app_code_quiz_index_set(context, index_new);
              let li = list_index_last_is(quizzes, index);
              if (li) {
                app_code_quiz_index_reset(context);
                function lambda7(value) {
                  let lessons = app_code_lessons();
                  let value_next = list_property_next_value(
                    lessons,
                    "id",
                    value,
                  );
                  return value_next;
                }
                let value_initial = app_code_lesson_first_id();
                storage_local_transform_context(
                  context,
                  "lesson_id",
                  value_initial,
                  lambda7,
                );
                await app_shared_screen_set(context, app_code_examples);
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
            function lambda3(quiz_answer) {
              let b2 = app_replace_button_wide(
                a_container,
                quiz_answer,
                on_click,
              );
              html_style_background_color_set(b2, "#ececec");
              html_style_margin_top(b2, "0.2em");
              async function on_click() {
                let eq2 = equal(quiz_answer, answer);
                if (eq2) {
                  app_shared_button_screen_green_style_assign(b2);
                  html_visibility_visible_multiple(hides);
                } else {
                  const transparency_alpha_channel_hex = "44";
                  app_g_button_wrong_generic(b2, "ff");
                }
              }
              return b2;
            }
          },
        ];
        let r2 = {
          question,
          answer,
          example,
          quizzes,
        };
        return r2;
      }
      let mapped = list_map(b, lambda2);
      return mapped;
    },
  };
  return lesson;
}
