import { property_get } from "./property_get.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { app_code_code_output } from "./app_code_code_output.mjs";
import { list_map } from "./list_map.mjs";
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
  "★ A LESSON BUILT HERE HAS NO ID, AND THAT IS THE POINT. It used to take the id out of the name and title it was handed, lowercased and underscored - so the key a learner's finished work is written down under was a consequence of how the home screen reads. Reword a title and every learner who finished that lesson holds a key naming nothing.";
  "The id is put on next door instead, by the one caller that holds the lesson's own function and can look the id up under that name. So the lesson leaves here without one, and a reader that got the lesson any other way finds nothing where the id should be rather than finding a plausible wrong one.";
  let lesson_name = property_get(name_id, "name");
  let lesson = {
    name: lesson_name,
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
          let container = app_code_code_output({
            parent,
            code_label: example_question_label,
            code: question,
            on_code: on_question,
            output_label: example_answer_label,
            output: answer,
            on_output: on_example_answer,
          });
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
