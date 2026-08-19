import { app_code_code_output } from "./app_code_code_output.mjs";
import { text_replace_multiple_to } from "./text_replace_multiple_to.mjs";
import { text_adjascent_duplicates_remove_underscore } from "./text_adjascent_duplicates_remove_underscore.mjs";
import { list_map } from "./list_map.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_base(
  name_id,
  above,
  example_count,
  batch_get,
  on_question,
  example_answer_label,
  quizzes_get,
  example_question_label,
  on_example_answer,
) {
  let t = property_get(name_id, "id");
  let t_underscored = text_replace_multiple_to(t, [" ", "."], "_");
  let lesson_unique_id =
    text_adjascent_duplicates_remove_underscore(t_underscored);
  let lesson_name = property_get(name_id, "name");
  let lesson = {
    name: lesson_name,
    id: lesson_unique_id,
    above,
    example_count,
    batch: function batch() {
      let batch_items = batch_get();
      function each_batch_item(bi) {
        let question = property_get(bi, "question");
        let answer = property_get(bi, "answer");
        text_split_empty(question);
        function example(parent) {
          html_flex_column_stretch(parent);
          app_code_flex_gap(parent);
          ("the card is the one this app draws code beside its output in everywhere, so the worked example wears exactly what a box read before the questions wears. What the example adds is the button beside it, which is why the button is not part of the card.");
          let container = app_code_code_output(
            parent,
            example_question_label,
            question,
            on_question,
            example_answer_label,
            answer,
            on_example_answer,
          );
          let r = {
            container,
          };
          return r;
        }
        let quizzes_exercises = quizzes_get(question, answer);
        let quizzes = property_get(quizzes_exercises, "quizzes");
        let exercises = property_get(quizzes_exercises, "exercises");
        let mapped = {
          question,
          answer,
          example,
          quizzes,
          exercises,
        };
        return mapped;
      }
      let mapped_items = list_map(batch_items, each_batch_item);
      return mapped_items;
    },
  };
  return lesson;
}
