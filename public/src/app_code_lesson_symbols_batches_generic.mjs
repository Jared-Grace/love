import { not } from "../../../love/public/src/not.mjs";
import { html_font_color_set } from "../../../love/public/src/html_font_color_set.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_style_background_color_set } from "../../../love/public/src/html_style_background_color_set.mjs";
import { html_style_margin_top } from "../../../love/public/src/html_style_margin_top.mjs";
import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
import { app_code_quiz_index_reset } from "../../../love/public/src/app_code_quiz_index_reset.mjs";
import { app_code_quiz_index_set } from "../../../love/public/src/app_code_quiz_index_set.mjs";
import { app_code_examples } from "../../../love/public/src/app_code_examples.mjs";
import { app_code_example_answer_gap } from "../../../love/public/src/app_code_example_answer_gap.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
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
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_flex_column_stretch } from "../../../love/public/src/html_flex_column_stretch.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
import { html_div_text } from "../../../love/public/src/html_div_text.mjs";
import { app_code_container_medium_blue } from "../../../love/public/src/app_code_container_medium_blue.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
export function app_code_lesson_symbols_batches_generic(
  name,
  id,
  above,
  batch_get,
  example_label,
  quiz_label,
  example_count,
  question_label,
  on_quiz_answer_button,
  on_question,
) {
  arguments_assert(arguments, 10);
  id = text_replace_space_underscore(id);
  function example_above(parent, question) {
    app_code_example_answer_gap(parent);
    let container = app_code_container_medium_blue(parent);
    html_div_text(container, question_label);
    let row = html_div_code_dark(container);
    on_question(row, question);
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
      let batch_items = batch_get();
      function each_batch_item(bi) {
        let question = property_get(bi, "question");
        let answer = property_get(bi, "answer");
        let symbols = text_split_empty(question);
        function example(parent) {
          html_flex_column_stretch(parent);
          app_code_flex_gap(parent);
          let a = example_above(parent, question);
          let container = property_get(a, "container");
          app_code_example_answer_label(container, example_label);
          let div3 = html_div_code_dark(container);
          ["app_code_symbol_generic", "transparent", "transparent"];
          html_text_set(div3, answer);
        }
        const answer_count_max = app_code_answer_count_max();
        const quizzes = [
          function on_quiz1(context, parent, container, refresh) {
            let quiz_question = question;
            let quiz_answer = answer;
            const answer_property = "answer";
            let a = example_above(container, quiz_question);
            let a_container = property_get(a, "container");
            app_code_example_answer_label(a_container, quiz_label);
            let bq = batch_get();
            let answers = list_map_property(bq, answer_property);
            let answers_unique = list_unique(answers);
            list_remove_if_exists(answers_unique, quiz_answer);
            let taken = list_shuffle_take(answers_unique, answer_count_max - 1);
            let concated = list_concat(taken, [quiz_answer]);
            list_sort_text_to(concated);
            let on_success = html_div(parent);
            let success = app_replace_success_message(on_success);
            async function on_next() {
              let size = list_size(quizzes);
              let index = list_index_of(quizzes, on_quiz1);
              let a1 = add_1(index);
              let index_new = mod(a1, size);
              app_code_quiz_index_set(context, index_new);
              let li = list_index_last_is(quizzes, index);
              if (li) {
                app_code_quiz_index_reset(context);
                function lesson_id_transform(value) {
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
                  lesson_id_transform,
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
              on_next,
            );
            let container_on_success = property_get(r4, "container");
            let hides = [success, container_on_success];
            html_visibility_hidden_multiple(hides);
            let buttons = list_map(concated, each_button);
            let answered = false;
            function each_button(quiz_answer) {
              let b = app_replace_button_wide(
                a_container,
                quiz_answer,
                on_click,
              );
              html_style_background_color_set(b, "#ececec");
              html_style_margin_top(b, "0.2em");
              async function on_click() {
                let eq2 = equal(quiz_answer, answer);
                if (eq2) {
                  answered = true;
                  app_shared_button_screen_green_style_assign(b);
                  html_visibility_visible_multiple(hides);
                } else {
                  if (not(answered)) {
                    let color_bg = "rgb(255 168 168)";
                    html_style_background_color_set(b, color_bg);
                    html_font_color_set(b, "rgb(167, 51, 51)");
                  }
                }
              }
              on_quiz_answer_button(b);
              return b;
            }
          },
        ];
        let mapped = {
          question,
          answer,
          example,
          quizzes,
        };
        return mapped;
      }
      let mapped_items = list_map(batch_items, each_batch_item);
      return mapped_items;
    },
  };
  return lesson;
}
