import { data_texts_search } from "../../../love/public/src/data_texts_search.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { app_code_example_answer_label } from "../../../love/public/src/app_code_example_answer_label.mjs";
import { app_code_lesson_above } from "../../../love/public/src/app_code_lesson_above.mjs";
import { app_code_flex_gap } from "../../../love/public/src/app_code_flex_gap.mjs";
import { html_flex_column_stretch } from "../../../love/public/src/html_flex_column_stretch.mjs";
import { text_split_empty } from "../../../love/public/src/text_split_empty.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_replace_space_underscore } from "../../../love/public/src/text_replace_space_underscore.mjs";
export async function app_code_lesson_base(
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
  let lesson_unique_id = text_replace_space_underscore(t);
  let result = await data_texts_search(s);
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
        let symbols = text_split_empty(question);
        function example(parent) {
          html_flex_column_stretch(parent);
          app_code_flex_gap(parent);
          let a = app_code_lesson_above(
            parent,
            example_question_label,
            question,
            on_question,
          );
          let container = property_get(a, "container");
          app_code_example_answer_label(container, example_answer_label);
          on_example_answer(container, answer);
          let r = {
            container,
          };
          return r;
        }
        let quizzes = quizzes_get(question, answer);
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
