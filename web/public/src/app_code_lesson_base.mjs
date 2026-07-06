import { app_code_lesson_above } from "../../../love/public/src/app_code_lesson_above.mjs";
import { app_code_lesson_quiz } from "../../../love/public/src/app_code_lesson_quiz.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_answer_count_max } from "../../../love/public/src/app_code_answer_count_max.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_flex_column_stretch } from "../../../love/public/src/html_flex_column_stretch.mjs";
import { html_div_code_dark } from "../../../love/public/src/html_div_code_dark.mjs";
export function app_code_lesson_base(
  name,
  id,
  above,
  batch_get,
  example_label,
  quiz_label,
  example_count,
  question_label,
  on_quiz_answer_button_forwards,
  on_question,
  quiz_backwards_label_answer,
  on_quiz_answer_button_backwards,
  quiz_backwards_answer_count_override,
) {
  arguments_assert(arguments, 13);
  id = text_replace_space_underscore(id);
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
          let a = app_code_lesson_above(parent, label, question, on_question);
          let container = property_get(a, "container");
          app_code_example_answer_label(container, example_label);
          let div3 = html_div_code_dark(container);
          ["app_code_symbol_generic", "transparent", "transparent"];
          html_text_set(div3, answer);
        }
        let answer_count_max = app_code_answer_count_max();
        const quizzes = [
          function quiz_forwards(context, parent, container, refresh) {
            let quiz_question = question;
            let quiz_answer = answer;
            const answer_property = "answer";
            app_code_lesson_quiz(
              container,
              quiz_question,
              answer_property,
              quiz_answer,
              parent,
              quiz_forwards,
              context,
              refresh,
              quiz_label,
              on_quiz_answer_button_forwards,
              on_question,
              question_label,
              batch_get,
            );
          },
        ];
        let nn = null_not_is(quiz_backwards_label_answer);
        if (nn) {
          function quiz_backwards(context, parent, container, refresh) {
            log(app_code_lesson_base.name, "quiz_backwards");
            let quiz_question = answer;
            let quiz_answer = question;
            const answer_property = "question";
            app_code_lesson_quiz(
              container,
              quiz_question,
              answer_property,
              quiz_answer,
              parent,
              quiz_backwards,
              context,
              refresh,
              quiz_backwards_label_answer,
              on_quiz_answer_button_backwards,
              on_question,
              question_label,
              batch_get,
            );
          }
          list_add(quizzes, quiz_backwards);
        }
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
